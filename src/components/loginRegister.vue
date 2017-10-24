<template>
	<div class="loginRegister">
		<img src="../assets/image/pic_splash_logo@2x.png" class="top">
		<swiper class="middle" :option="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
			<swiper-slide>
				<img src="../assets/image/pic_splash01@2x.png">
				<p>「抢单接单功能」</p>
				<div class="swiper-pagination">
					<span v-bind:class="{'swiper-pagination-bullet':true, 'swiper-pagination-bullet-active' : message}"></span>
					<span v-bind:class="{'swiper-pagination-bullet':true, 'swiper-pagination-bullet-active' : !message}"></span>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="../assets/image/pic_splash02@2x.png">
				<p>「新上线，召集新卖家」</p>
				<div class="swiper-pagination">
					<span class="swiper-pagination-bullet"></span>
					<span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
				</div>
			</swiper-slide>
			<!-- 出错了，该处不显示 -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="bottom">
			<router-link to="/login"><p>登录</p></router-link>
			<router-link to="/register"><p>注册账号</p></router-link>
		</div>
	</div>
</template>

<style type="text/css">
	/*@import url("../../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css");*/
	.loginRegister{ font-size: 0.32rem; height: 12.06rem; background: #fff; }
	.loginRegister .top{ width: 3.2rem; margin-top: 0.12rem; margin-left: 2.16rem; }
	.loginRegister .middle img{ width: 4.8rem; margin-top: 0.6rem; margin-left: 1.36rem; }
	.loginRegister .middle p{ margin: 0 auto; text-align: center; font-size: 0.48rem; color: #111;}
	.loginRegister .bottom a:first-of-type p{ 
		height: 1rem; width: 6.7rem; border-radius: 2rem; margin-left: 0.4rem;
		background: #fceb6c; line-height: 1rem; text-align: center;
		font-size: 0.34rem; color: #111; margin-top: 0.4rem;
	}
	.loginRegister .bottom a:last-of-type p{ text-align: center; font-size: 0.3rem; color: #7d7d7d; margin-top: 0.4rem; }
	.loginRegister .swiper-container{ padding-bottom: 2.3rem; }
	.loginRegister .swiper-pagination {width: 100%; height: 0.4rem;margin-top: 1.44rem;}
	.loginRegister .swiper-pagination .swiper-pagination-bullet-active{ width: 0.44rem;border-radius: 30%;background: rgba(0,0,0,0.2); }
</style>

<script type="text/javascript">
	import $ from "jquery"
	import { swiper, swiperSlide } from "vue-awesome-swiper"
	require('swiper/dist/css/swiper.css')
	export default{
		name: "loginRegister",
		components: {
			swiper,
			swiperSlide
		},
		data(){
			return {
				message: true,
        		// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        		notNextTick: true,
        		swiperOption: {
        			direction: 'horizontal',
        			pagination: '.swiper-pagination',
        			paginationElement : 'li',
          			paginationType : 'bullets',
        			paginationClickable: true,
        			grabCursor: true,
          			setWrapperSize: true,
          			autoHeight: true,
          			initialSlide: 1,
          			onSlideChangeEnd: function(swiper){
          				console.log(swiper);
				      	this.message = !this.message //切换结束时，告诉我现在是第几个slide
				    },
				    onTransitionEnd (swiper) {
				    	this.message = !this.message
			            console.log(swiper)
			        }
        		}
			};
		},
		computed: {
      		swiper() {
        		return this.$refs.mySwiper.swiper
      		}
    	},
		mounted(){
			var that = this;
			// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      		/*console.log('this is current swiper instance object', this.swiper)
      		this.swiper.slideTo(3, 1000, false)
      		setTimeout(function(){
      			that.message = !that.message;
      		}, 1000)*/
			var _vt = localStorage.getItem("_vt");
			if (_vt) {
				location.hash = "vipiao";
			}
		},
		methods: {

		},
	}
</script>