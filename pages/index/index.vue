<template>
	<view class="container">
		
<!-- 		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link> -->
		<uni-card >
			<text>酒店客房预定用户端</text>
		</uni-card>
		
		<uni-section title="房间性质" type="line" >
			<uni-data-select v-model="property"
			 :localdata="range"
			  @change="propertyChange">
			</uni-data-select>
		</uni-section>
		<view v-if="property!='1'">
			<uni-section title="日期选择" type="line">
				<uni-datetime-picker type="datetimerange" range-separator="至"  v-model="time" @maskClick="maskClick1" hide-second='true' >
					
				</uni-datetime-picker>
			</uni-section>
		</view>
		<view v-else>
			<uni-section title="时间选择" type="line">
				<uni-datetime-picker type="datetimerange" range-separator="至"  v-model="time" @maskClick="maskClick1" hide-second='true'>
					
				</uni-datetime-picker>
			</uni-section>
		</view>
		<uni-section title="电话号码" subTitle="到店使用该电话号码入住" type="line" padding>
			<uni-easyinput  v-model="phone" focus placeholder="请输入内容" ></uni-easyinput>
		</uni-section>
		<button type='primary' @click='goToRoomPage'>确定</button>
	</view>
</template>

<script>
	import {getAllRoomDetail, getRoomTotal} from '@/api/api.js'
	import moment from "moment";
	moment.locale('zh-cn')
	export default {
		data() {
			return {
				property:''  ,//标准房或者钟点房
				range: [
				        { value: '0', text: "标准房" },
				        { value: '1', text: "钟点房" },
				      ],
				time:[moment(moment().format('YYYY-MM-DD 14:00')),moment(moment().format('YYYY-MM-DD 14:00')).add(1,'d').add(-2,'h')],
				phone:''
				//href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			goBack(){
			},
			getData(){
				// uni.request({
				// 	url:'http://localhost:8081/room/getRoomTotal',
				// 	success(res) {
				// 		console.log(res)
				// 	}
				// })
				getRoomTotal().then((res)=>{
					console.log(res)
				})
				getAllRoomDetail().then((res)=>{
					console.log(res)
				})
			},
			propertyChange(e){
				console.log(e)
				if(e=='0'){
					this.time=[moment(moment().format('YYYY-MM-DD 14:00')),moment(moment().format('YYYY-MM-DD 14:00')).add(1,'d').add(-2,'h')]
				}
				else{
					this.time=[moment(),moment().add(3,'h')]
				}
			},
			maskClick1(){
				console.log(this.time)
			},
			goToRoomPage(){
				let params={
					phone:this.phone,
					property:this.property,
					time:this.time,
				}
				//console.log(params)
				uni.navigateTo({
					//url:"'/pages/roomList/roomList?params='+encodeURIComponent(JSON.stringify(params))"
					url:"/pages/roomList/roomList?phone="+params.phone+"&time0="+params.time[0]+"&time1="+params.time[1]+"&nature="+params.property
				})
			}

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
