<template>
	<div class="personalInfo">
		<p class="topTitle">
			<router-link to="/vipiao"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
			个人设置
		</p>
		<ul>
			<li class="headerImg">
				头像
				<img src="../assets/image/ic_arrow_right@2x.png">
				<span></span>
			</li>
			<li>
				昵称
				<img src="../assets/image/ic_arrow_right@2x.png">
				<span></span>
			</li>
			<li v-if=" isAuthentication != 0 ">
				<router-link to="/authentication">
					身份认证
					<img src="../assets/image/ic_arrow_right@2x.png">
					<span class="personalStatus">{{authenticationContent}}</span>
				</router-link>
			</li>
			<li v-else>
				<a href="javascript:;" @click="toAuthentication">
					身份认证
					<img src="../assets/image/ic_arrow_right@2x.png">
					<span class="personalStatus">{{authenticationContent}}</span>
				</a>
			</li>
			<li>
				手机号
				<span></span>
			</li>
			<router-link to="/aboutUs"><li>
				关于我们
			</li></router-link>
			<li @click="logout" class="logout">
				退出登录
			</li>
		</ul>
		<!-- 退出登录弹框 -->
		<div class="layer" v-show="show">
			<p>确认退出当前登录吗？</p>
			<p>
				<span @click="cancle">取消</span>
				<span @click="confirm">确认</span>
			</p>
		</div>
		<div class="mask" v-show="show"></div>
		<!-- 未认证弹框 -->
		<div class="layer layer2" v-show="authenticationLayer">
			<p><img src="../assets/image/ic_popup_close@2x.png" @click="cancle"></p>
			<img src="../assets/image/pic_popup_certified_dis@2x.png">
			<p style="margin: 0.2rem 0 0.16rem;font-size: 0.36rem;color: #111;"</p>
			<p style="font-size: 0.24rem;color: #9d9d9d;">成为认证商家，开通抢单功能</p>
			<router-link to="/authenticationInit"><p style="width: 5.1rem;margin: 0.4rem 0 0.6rem 0.5rem;background: linear-gradient(-105deg,  #fce86c, #ffe64b);box-shadow: 0 0.02rem 0.08rem 0 rgba(0,0,0,0.1);padding: 0.3rem 0;border-radius: 2rem;text-align: center;">开始认证</p></router-link>
		</div>
		<div class="mask" v-show="authenticationLayer"></div>
	</div> 
</template>

<style type="text/css" scoped="">
	.personalInfo{ font-size: 0.32rem; color: #111; }
	.personalInfo .topTitle{
	  font-size: 0.34rem;line-height: 0.92rem;border-bottom: solid 0.01rem #ddd;
	  text-align: center;position: relative;background: #fff;color: #111;
	}
	.personalInfo .topTitle img{width: 0.32rem;position: absolute;top: 0.3rem;left: 0.3rem;}
	.personalInfo ul li{ 
		border-bottom: solid 0.01rem #ddd; padding: 0.3rem; background: #fff;
	}
	.personalInfo ul li img{
		width: 0.28rem; margin-left: 0.2rem; vertical-align: middle; float: right; 
		margin-top: 0.1rem;
	}
	.personalInfo ul li span{
		font-size: 0.3rem; color: #7d7d7d; float: right;
	}
	.personalInfo ul li.headerImg { height: 1.34rem; line-height: 1.34rem; }
	.personalInfo ul li.headerImg img { margin-top: 0.6rem; }
	.personalInfo ul li.headerImg span{
		display: inline-block; width: 1.2rem; height: 1.2rem; border-radius: 50%; padding: 0.08rem;
		border: solid 0.01rem #ddd;
	}
	.personalInfo ul li:nth-of-type(3){
		margin-top: 0.32rem; border-top: solid 0.01rem #ddd;
	}
	.personalInfo ul li:nth-of-type(5){
		margin-top: 0.32rem; border-top: solid 0.01rem #ddd;
	}
	.personalInfo ul li.logout{
		text-align: center; color: #FF5D6C; margin-top: 0.32rem; border-top: solid 0.01rem #ddd;
	}
	.personalInfo .layer{
		position: fixed; top: 35%; width: 80%; left: 9%; background: #fff; 
		padding-top: 0.4rem;z-index: 2; text-align: center;border-radius: 0.24rem;
	}
	.personalInfo .layer p:first-of-type{
		height: 1.6rem; line-height: 1.3rem; border-bottom: solid 0.01rem #ddd; font-size: 0.36rem;
	}
	.personalInfo .layer p:last-of-type span{
		display: inline-block; width: 39%; padding: 0.3rem;
	}
	.personalInfo .layer p:last-of-type span:first-of-type{
		border-right: solid 0.01rem #ddd;
	}
	.personalInfo .mask{
		position: fixed; width: 100%; height: 100%; background: rgba(0,0,0,0.6); top: 0; left: 0;
	}
	.personalInfo .layer2{ padding-top: 0.2rem; }
	.personalInfo .layer2 p:first-of-type{ border-bottom: none; height: 0.6rem;line-height: 0.6rem;text-align: right;margin-right: 0.3rem; }
	.personalInfo .layer2 p img{ width: 0.46rem; }
	.personalInfo .layer2>img{ width: 1.68rem; }
</style>

<script type="text/javascript">
	import $ from "jquery"
	export default {
		name: "personalInfo",
		data() {
			return {
				show: false,
				isAuthentication: '',
				authenticationContent: '',
				authenticationLayer: false
			};
		},
		mounted() {
			var that = this;
			var data = {
				_vt: localStorage.getItem("_vt")
			};
			this.$http.post("/api/v3/user/user-data",data,{emulateJSON:true}).then(function(res){
				if (res.body.status_code==200) {
					that.isAuthentication = res.body.data.user.is_wallet;
					$(".personalInfo ul li:eq(0) span").html("<img src='"+res.body.data.user.header+"' style='width: 1.2rem; border-radius:50%;' />");
					$(".personalInfo ul li:eq(1) span").html(res.body.data.user.nick_name);
					if (res.body.data.user.is_wallet==1) {
						that.authenticationContent = "已认证"
					}else if (res.body.data.user.is_wallet==2) {
						that.authenticationContent = "未通过"
					}else if (res.body.data.user.is_wallet==3) {
						that.authenticationContent = "审核中"
					}else{
						that.authenticationContent = "未认证"
					}
					$(".personalInfo ul li:eq(3) span").html(res.body.data.user.mobile);
				}else{
					alert(res.body.message);
				}
			}, function(error){
				console.log(error);
			})
		},
		methods: {
			logout: function(){
				this.show = true;
			},
			cancle: function(){
				this.show = false;
				this.authenticationLayer = false;
			},
			confirm(){
				this.show = false;
				localStorage.removeItem("_vt");
				location.href = "/";
			},
			toAuthentication: function(){
				this.authenticationLayer = true;
			}
		},
		watch: {

		}
	}
</script>