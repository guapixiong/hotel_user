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
	
	/**
	 * 获取当前可利用的房间
	 * @param params
	 * @returns {AxiosPromise}
	 */
	export function getAvailableRoomByTime(params){
	    return request({
	        url:'/room/getAvailableRoomByTime',
	        params:params
	    })
	}
	/**
	 * 插入预定
	 * @param params
	 * @returns {AxiosPromise}
	 */
	export function insertReservation(params){
	    return request({
	        url:'/room/insertReservation',
	        method:'post',
	        data:params
	    })
	}