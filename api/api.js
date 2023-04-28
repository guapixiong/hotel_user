	import Request from '@/utils/request.js'
	let request=new Request().http
	
	export function getRoomTotal(){
		return request({
					url:'/room/getRoomTotal',
					//method:'get',
					//data:data
				})
	}
	
	/**
	 * 获取所有房间信息
	 * @returns {AxiosPromise}
	 */
	export function getAllRoomDetail(){
	    return request({
	        url:'/room/getAllRoomDetail'
	    })
	}