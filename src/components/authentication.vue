<template>
	<div class="authentication">
		<p class="topTitle">
			<img src="../assets/image/ic_nav_backarrow.png" @click="back">
			身份认证
		</p>
		<ul>
			<li class="first">
				<img src="../assets/image/ic_certified@2x.png">
				<p class="certified">认证卖家</p>
				<p class="bindAgain">重新绑定</p>
			</li>
			<li class="second">
				身份信息
			</li>
			<li class="third">
				真实姓名
				<span></span>
			</li>
			<li class="four">
				身份证号
				<span></span>
			</li>
		</ul>
	</div>
</template>

<style type="text/css" scoped="">
	.authentication{ font-size: 0.32rem; color: #111;background: #fff; }
	.authentication .topTitle{
	  font-size: 0.34rem;line-height: 0.92rem;border-bottom: solid 0.01rem #ddd;
	  text-align: center;position: relative;background: #fff;color: #111;
	}
	.authentication .topTitle img{width: 0.32rem;position: absolute;top: 0.3rem;left: 0.3rem;}
	.authentication ul li{ 
		border-bottom: solid 0.01rem #ddd; padding: 0.3rem; background: #fff;
	}
	.authentication ul li img{
		width: 0.28rem; margin-left: 0.2rem; vertical-align: middle; float: right; 
		margin-top: 0.1rem;
	}
	.authentication ul li span{
		font-size: 0.3rem; color: #4d4d4d; margin-left: 0.4rem;
	}
	.authentication ul li.first{ height: 2.5rem;background: url(../assets/image/bg_hom_top@2x.png) 0 0 no-repeat;background-size: 100%; }
	.authentication ul li.first img{ 
		width: 1.28rem; height: 1.28rem; position: absolute; top: 1.1rem; 
		left: 2.9rem;
	}
	.authentication ul li.first .certified{ text-align: center; margin-top: 1.35rem; font-size: 0.28rem; color: #7d7d7d; }
	.authentication ul li.first .bindAgain{ text-align: center; margin-top: 0.2rem; font-size: 0.28rem; color: #ff5d6c; border: solid 0.01rem #ff5c6d; width: 1.36rem; border-radius: 2rem;margin-left: 2.8rem;padding: 0.02rem 0.06rem; }
	.authentication ul li.second{ font-size: 0.24rem;color: #aaa; }
</style>

<script type="text/javascript">
	import $ from "jquery"
	export default {
		name: "aboutUs",
		data () {
			return {

			};
		},
		mounted () {
			var data = {
				_vt: localStorage.getItem("_vt")
			};
			this.$http.post("/api/v3/user/user-data", data, { emulateJSON:true }).then(function(res){
				if (res.body.status_code==200) {
					$(".third span").text(res.body.data.user.real_name);
					$(".four span").text(res.body.data.user.id_card);
				}
			}, function(error){
				console.log(error);
			})
		},
		methods: {
			back: function(){
				this.$router.go(-1);
			}
		}
	} 
</script>