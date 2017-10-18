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
			<router-link to="/authentication"><li>
				身份认证
				<img src="../assets/image/ic_arrow_right@2x.png">
				<span></span>
			</li></router-link>
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
		<div class="layer" v-show="show">
			<p>确认退出当前登录吗？</p>
			<p>
				<span @click="cancle">取消</span>
				<span @click="confirm">确认</span>
			</p>
		</div>
		<div class="mask" v-show="show"></div>
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
		position: fixed; top: 35%; width: 80%; left: 9%; background: #fff; padding-top: 0.4rem;
		z-index: 2; text-align: center;
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
</style>

<script type="text/javascript">
	import $ from "jquery"
	export default {
		name: "personalInfo",
		data() {
			return {
				show: false
			};
		},
		mounted() {
			var data = {
				_vt: localStorage.getItem("_vt")
			};
			this.$http.post("/api/v3/user/user-data",data,{emulateJSON:true}).then(function(res){
				if (res.body.status_code==200) {
					$(".personalInfo ul li:eq(0) span").html("<img src='"+res.body.data.user.header+"' style='width: 1.2rem; border-radius:50%;' />");
					$(".personalInfo ul li:eq(1) span").html(res.body.data.user.nick_name);
					if (res.body.data.user.is_wallet==1) {
						$(".personalInfo ul li:eq(2) span").html("已认证");
					}else{
						$(".personalInfo ul li:eq(2) span").html("未认证");
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
			},
			confirm(){
				this.show = false;
				localStorage.removeItem("_vt");
				location.href = "/";
			}
		},
		watch: {

		}
	}
</script>