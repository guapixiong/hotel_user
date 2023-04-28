<template>
	<view >
		<!-- <uni-section title="房间列表" type="line"> -->
			<scroll-view scroll-y="true" style="height: 100%;">
				<uni-list>
					<uni-list-item v-for="item in roomList" >
						<template v-slot:body>
								<uni-card   >
									<image slot='cover' style="width: 600rpx;height: 300rpx;margin-top: 20rpx;" :src="baseUrl+item.room_url"></image>
									
										<text>
											房间类型：{{item.type}}  房间号码：{{item.room_number}}
											标准房价格：¥{{item.room_price}} 钟点房价格：¥{{item.hour_price}}
										</text>
										<button type="primary" @click="clickRoom(item.id)">预定</button>
								</uni-card>
						</template>
					</uni-list-item>
				</uni-list>
			</scroll-view>
			<view>
				<uni-popup ref="popup" type="dialog" >
					<uni-popup-dialog mode="base" title="确定预定吗？" @confirm="okCommit"></uni-popup-dialog>
				</uni-popup>
			</view>
			<view>
				<uni-popup ref="message" type="message">
					<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
				</uni-popup>
			</view>
			
			
		<!-- </uni-section> -->
	</view>
</template>

<script>
import moment from 'moment'
import { getAvailableRoomByTime, insertReservation } from '../../api/api'
	export default {
		data() {
			return {
				baseUrl:'',
				time:[],
				phone:'',
				roomList:[],
				roomId:0,
				nature:'',
				msgType:"success",
				messageText:"",
			}
		},
		onLoad:function(option) {
			let me=this
			this.time=[moment(parseInt(option.time0)).format('YYYY-MM-DD HH:mm'),moment(parseInt(option.time1)).format('YYYY-MM-DD HH:mm')]
			this.phone=option.phone
			this.nature=option.nature
			let params={
				start:this.time[0],
				end:this.time[1]
			}
			me.baseUrl=me.imageBaseURL()
			getAvailableRoomByTime(params).then((r)=>{
				if(r.length>0){
					me.roomList=r
					console.log(r)
				}
			})
			//console.log(this.time)
		},
		methods: {
			clickRoom(id){
				let me=this
				this.roomId=id
				me.$refs.popup.open()				
				//console.log(me.$refs.popup)
				//this.$refs.confirmDialog.open()
				//console.log(id)
			},
			okCommit(){
				let me=this
				let params={
					customer_name:"",
					customer_phone:me.phone,
					room_id:me.roomId,
					room_type:me.nature,
					check_in_time:me.time[0],
					check_out_time:me.time[1]
				}
				console.log(params)
				insertReservation(params).then(r=>{
					if(r===1){
						me.msgType="success"
						me.messageText="预定成功"
						me.$refs.message.open()
					}
					else{
						me.msgType="error"
						me.messageText="预定失败"
						me.$refs.message.open()
					}
				})
				
			}
		}
	}
</script>

<style>

</style>
