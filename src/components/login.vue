<template>
	<div class="login">
		<p class="topTitle">
			<router-link to="/"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
		</p>
		<img src="../assets/image/pic_splash_logo@2x.png" class="top">
		<ul class="middle">
			<li>
				<input type="tel" maxlength="11" name="mobile" placeholder="请输入手机号" v-model="items.value1" ref="type1">
			</li>
			<li>
				<input type="password" name="password" placeholder="请输入密码" v-model="items.value2" ref="type2">
			</li>
		</ul>
		<div class="bottom">
			<a href="javascript:;" v-if="isActive"><p class="active" v-on:click="toVipiao">登录</p></a>
			<p class="noActive" v-else>登录</p>
			<router-link to="forgotPassword"><p>忘记密码</p></router-link>
		</div>
		<img src="../assets/image/bg_login_botm@2x.png" class="bottomImg">
		<div class="layer" v-if="layer">{{message}}</div>
	</div>
</template>

<style type="text/css" scoped="">
	.login{ font-size: 0.32rem; height: 11.18rem; background: #fff; }
	.login .topTitle{
	  font-size: 0.34rem;line-height: 0.92rem;border-bottom: solid 0.01rem #ddd;
	  text-align: center;position: relative;background: #fff;color: #111;
	}
	.login .topTitle img{width: 0.32rem;position: absolute;top: 0.3rem;left: 0.3rem;}
	.login .top{ width: 3.2rem; margin-top: 1rem; margin-left: 2.16rem; }
	.login .middle{ margin: 0.4rem 0.6rem; }
	.login .middle li{ height: 1.2rem; line-height: 1.2rem; border-bottom: solid 0.01rem #ddd; padding-left: 0.68rem; background: url(../assets/image/ic_login_number@2x.png) 0.1rem 0.4rem no-repeat; background-size: 0.4rem; }
	.login .middle li:last-of-type{ background: url(../assets/image/ic_login_password01@2x.png) 0.1rem 0.4rem no-repeat; background-size: 0.4rem; }
	.login .middle li input { border: none; font-size: 0.3rem; width: 100%; }
	.login .bottom p.noActive{ 
		height: 1rem; width: 6.7rem; border-radius: 2rem; margin-left: 0.4rem;
		background: #ddd; line-height: 1rem; text-align: center;
		font-size: 0.34rem; color: #fff; margin-top: 0.6rem;
	}
	.login .bottom a p:last-of-type{ text-align: center; font-size: 0.3rem; color: #7d7d7d; margin-top: 0.24rem; }
	.login .bottomImg { width: 7.5rem; position: absolute; bottom: 0; }
	.login .bottom a p.active { 
		height: 1rem; width: 6.7rem; border-radius: 2rem; margin-left: 0.4rem;
		background: #fce86c; color: #111; line-height: 1rem; text-align: center;
		font-size: 0.34rem; margin-top: 0.6rem;
	}
	.login .layer { 
		padding: 10px 20px; background: rgba(0,0,0,0.4); position: fixed; top: 24%; left: 25%; 
		color: #fff;
	}
</style>

<script type="text/javascript">
	import $ from "jquery"
	export default{
		name: "login",
		data(){
			return {
				isActive: false,
				items: {
					value1: '',
					value2: ''
				},
				layer: false,
				message: ''
			};
		},
		mounted(){
			var that = this;
			$("input[name='mobile']").blur(function(){
				var mobile = $(this).val();
				if (!/^(0|86|17951)?(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$/.test(mobile)) {
					$(this).focus();
					that.message = "请输入正确的手机号";
					that.layer = true;
					setTimeout(function(){
						that.layer = false;
					} ,2000)
				}
			})
			$("input[name='password']").blur(function(){
				var password = $(this).val();
				if (!/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,12}$/.test(password)) {
					$(this).focus();
					that.message = "请输入6-12位的密码";
					that.layer = true;
					setTimeout(function(){
						that.layer = false;
					} ,2000)
				}
			})

			window.onhashchange = function(event){

			    console.log(event.oldURL, event.newURL);

			}
		},
		methods: {
			toVipiao: function(){
				var data = {
					user_name: $("input[name='mobile']").val(),
					pass_word: $("input[name='password']").val()
				};
				this.$http.post("/api/v3/user/login", data, {emulateJSON: true}).
				then(function(res){
					if (res.body.status_code==200) {
						localStorage.setItem("_vt", res.body.data.token);
						location.hash = "vipiao";
					}else{
						alert(res.body.message);
					}
				}, function(error){
					console.log(error);
				})
			}
		},
		watch: {// key 是需要观察的表达式，值是对应的回调函数。Vue实例将会在实例化是调用 $watch()，遍历watch对象的每一个属性。
			items: {
				handler: function(val, oldval){
					if (/^(0|86|17951)?(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$/.test(this.$refs.type1.value) && /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,12}$/.test(this.$refs.type2.value)) {
						this.isActive = true;
					}// ref用来给元素或子组件注册引用信息。引用信息将会注册在父组件的$refs对象上。如果在普通DOM元素上使用，引用指向的就是DOM元素（$refs 返回所有注册过ref的DOM元素）;如果在子组件上，引用就指向组件实例。
					else{
						this.isActive = false;
						localStorage.clear();
					}
				},
				deep: true				
			}
		}
	}
</script>