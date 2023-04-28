/**
 * 基于uni.request 的 ajax请求
 * @author zhang gong
 * @date 2021-08-28
 */

import VariableVerify from '@/uni_modules/zg-variable-verify/js_sdk/VariableVerify.js'
import ObjectAction from '@/uni_modules/zg-object-action/js_sdk/ObjectAction.js'

const VV = new VariableVerify()
const OA = new ObjectAction()

// 目前类不支持定义静态属性，因此放在类外边
const baseConfig = {
	baseUrl: "",
	dataType: "json",
	headers: {
		"authorization":"",
		"content-type": "application/json"
	}
}

class UniRequest {
	
	constructor(config = {}) {
		this.config = OA.deepClone(baseConfig,config);
		this.interceptor = {
			beforeRequest(config) {
				return config
			},
			beforeResponse(res) {
				return res
			},
			beforeResponseError(e) {
				return e
			},
		}
	}
	
	// 发起请求
	request(method = 'GET', url = '', data = {}) {
		return new Promise((resolve, reject) => {
			// 检查传参
			const requestError = getRequestError(method,url,data)
			if(requestError instanceof Error) {
				this.interceptor.beforeResponseError(requestError);
				reject(requestError.message)
				return
			}
			// 拼接url
			if(/^(http|https):/.test(this.config.baseUrl)) {
				url = this.config.baseUrl + url
			}
			let config = {
				method,
				url,
				data,
				dataType: this.config.dataType,
				header: this.config.headers,
			}
			// 发起请求前
			config = OA.deepClone(config,this.interceptor.beforeRequest(config))
			uni.request({
				...config,
				success: (res) => {
					if([200].includes(res.statusCode)) {
						// 请求成功后
						const response = this.interceptor.beforeResponse(res); 
						resolve(response)
					} else {
						// 请求失败后
						this.interceptor.beforeResponseError(res.statusCode);
						reject(res.statusCode)
					}
				},
				// 调用接口失败后
				fail: (e) => {
					this.interceptor.beforeResponseError(-1);
					reject(e)
				}, 
			});
		})
	}
	
	get(url,data) {
		return this.request('GET',url,data)
	}
	
	post(url,data) {
		return this.request('POST',url,data)
	}
}

export default UniRequest;

// 验证请求配置
function getRequestError(method, url, data) {
	if(VV.varType(method) !== 2 || !['GET','POST'].includes(method.toUpperCase())) {
		return new Error('this request mode is not supported:' + method)
	} else if(VV.varType(url) !== 2) {
		return new Error('request url error:' + url)
	} else if(VV.varType(data) !== 5) {
		return new Error('request parameter must be object:', data)
	} else {
		return true
	}
}
