<template>
	<view>
		<scroll-view scroll-y="true" style="height: 100%;">
			<uni-list>
				<uni-list-item v-for="item in orderList" >
					<template v-slot:body>
							<uni-card   >
								<!-- <image slot='cover' style="width: 600rpx;height: 300rpx;margin-top: 20rpx;" :src="baseUrl+item.room_url"></image> -->
								
									<text>
										订单编号：{{item.order_id}}    手机号：{{item.customer_phone}}
										房间号码：{{item.room_number}} 订单状态：<uni-tag :type="status[item.order_status][1]" :text="status[item.order_status][0]"></uni-tag>
										标准房价格：¥150 钟点房价格：¥100
										时间段：
										{{item.check_in_time}} 至
										{{item.check_out_time}}
									</text>
									<button type="warn" @click="cancelReservation(item.order_id)">取消预定</button>
							</uni-card>
					</template>
				</uni-list-item>
			</uni-list>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: {
					'-1':['已退款','default'],
					'0':['已取消','default'],
					'1':['已预定','royal'],
					'2':['待结账','warning'],
					'3':['已完成','success']
				},
				orderList:[{"order_status":"1","final_payment_amount":0.0,"create_time":"2023-04-28 16:18:54","check_in_time":"2023-04-28 14:00:00","customer_phone":"125","check_out_time":"2023-04-29 12:00:00","room_number":"1104","customer_name":"山田凉","order_id":32}],
			}
		},
		methods: {
			cancelReservation(id){
				console.log(id)
			}
			
		}
	}
</script>

<style>

</style>
