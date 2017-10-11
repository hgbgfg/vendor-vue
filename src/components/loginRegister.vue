<template>
	<div class="loginRegister">
		<img src="../assets/image/pic_splash_logo@2x.png" class="top">
		<div class="middle swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">					
					<img src="../assets/image/pic_splash01@2x.png">
					<p>「抢单接单功能」</p>
				</div>
				<div class="swiper-slide">					
					<img src="../assets/image/pic_splash02@2x.png">
					<p>「新上线，召集新卖家」</p>
				</div>
			</div>
			<div class="swiper-pagination"></div>		
		</div>
		<div class="bottom">
			<router-link to="/login"><p>登录</p></router-link>
			<p>注册账号</p>
		</div>
	</div>
</template>

<style type="text/css" scoped="">
	@import url("../../node_modules/swiper/dist/css/swiper.min.css");
	.loginRegister{ font-size: 0.32rem; height: 13.34rem; background: #fff; }
	.loginRegister .top{ width: 3.2rem; margin-top: 1rem; margin-left: 2.16rem; }
	.loginRegister .middle img{ width: 4.8rem; margin-top: 1.12rem; margin-left: 1.36rem; }
	.loginRegister .middle p{ margin: 0 auto; text-align: center; font-size: 0.48rem; color: #111;}
	.loginRegister .bottom a p:first-of-type{ 
		height: 1rem; width: 6.7rem; border-radius: 2rem; margin-left: 0.4rem;
		background: #fceb6c; line-height: 1rem; text-align: center;
		font-size: 0.34rem; color: #111; margin-top: 2.3rem;
	}
	.loginRegister .bottom p:last-of-type{ text-align: center; font-size: 0.3rem; color: #7d7d7d; margin-top: 0.4rem; }
</style>

<script type="text/javascript">
	import $ from "jquery"
	import Swiper from "swiper"
	export default{
		name: "loginRegister",
		data(){
			return {
				message: "hello world"
			};
		},
		mounted(){
			this.$nextTick(function(){				
				var swiper = new Swiper(".swiper-container", {
					pagination: '.swiper-pagination'
				});
			})
			var userName = localStorage.getItem("userName");
			if (userName) {
				location.hash = "vipiao";
			}
		},
		mothods: {

		}
	}
</script>