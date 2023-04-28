/**
 * 对象操作
 * @author zhang gong
 * @date 2021-08-28
 */

import VariableVerify from '@/uni_modules/zg-variable-verify/js_sdk/VariableVerify.js'

const VV = new VariableVerify()

class ObjectAction {
	
	constructor() {
	    
	}
	
	/**
	 * 两个对象深度合并，将第二个对象的非异常值属性合并到第一个对象
	 * @param {Object} obj1 合并目标对象
	 * @param {Object} obj2 合并对象
	 */
	deepClone(obj1,obj2) {
		if(VV.varType(obj1) === 5 && VV.varType(obj2) === 5) { // 传入参数都必须是对象
			for(let i in obj2) {
				const res1 = VV.varType(obj1[i])  
				const res2 = VV.varType(obj2[i])
				if(res1 === 5 && res2 === 5) { // 都是对象
					this.deepClone(obj1[i],obj2[i])
				} else if([1,2,3,4,5,6].includes(res2)) { // 不是对象，不是undefined、null
					obj1[i] = obj2[i]
				}
			}
		}
		return obj1;
	}

	/**
	 * 多个对象深度合并
	 * @param {Object} 可传入多个对象
	 */
	deepCloneMulti() {
		const arr = [...arguments].filter(i => VV.varType(i) === 5); // 排除非对象
		if(arr.length === 0) return undefined; // 无参数
		if(arr.length === 1) return arguments[0]; // 参数不够
		let ob = {}
		let ob1 = arr[0]
		arr.slice(1).forEach(i => {
			ob1 = this.deepClone(ob1,i)
		})
		return this.deepClone(ob,ob1)
	}
	
	/**
	 * 页面传参对象序列化
	 * @param {Object} params 参数对象
	 * @return {string}
	 */
	serializeParams(params) {
		if (Object.prototype.toString.call(params) !== "[object Object]") return ''
		if (Object.keys(params).length === 0) return ''
		let params_str = '?'
		for (let key in params) {
			params_str += `${key}=${params[key]}`
		}
		return params_str
	}
}

export default ObjectAction;
