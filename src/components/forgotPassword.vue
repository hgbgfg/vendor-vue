<template>
	<div class="forgotPassword">
		<p class="topTitle">
			<router-link to="/login"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
			忘记密码
		</p>
		<ul class="middle">
			<li>
				<input type="tel" name="mobile" placeholder="请输入手机号" v-model="items.value1" ref="type1">
			</li>
			<li>
				<input type="number" name="verificationCode" placeholder="请输入验证码" v-model="items.value2" ref="type2">
				<button name="getVerificationCode" v-on:click="getVerificationCode" class="specialBtn">获取验证码</button>
			</li>
		</ul>
		<div class="bottom">
			<a href="javascript:;" v-if="isActive"><p v-bind:class="{active: isActive}" v-on:click="verifyCode">下一步</p></a>
			<p class="noActive" v-else>下一步</p>
		</div>
		<div class="layer" v-if="layer">{{message}}</div>
	</div>
</template>

<style type="text/css" scoped="">
	.forgotPassword{ font-size: 0.32rem; height: 11.26rem; background: #fff; }
	.forgotPassword .topTitle{
	  font-size: 0.34rem;line-height: 0.92rem;border-bottom: solid 0.01rem #ddd;
	  text-align: center;position: relative;background: #fff;color: #111;
	}
	.forgotPassword .topTitle img{width: 0.32rem;position: absolute;top: 0.3rem;left: 0.3rem;}
	.forgotPassword .middle{ margin: 0.4rem 0.6rem; }
	.forgotPassword .middle li{ height: 1.2rem; line-height: 1.2rem; border-bottom: solid 0.01rem #ddd; padding-left: 0.68rem; background: url(../assets/image/ic_login_number@2x.png) 0.1rem 0.4rem no-repeat; background-size: 0.4rem; }
	.forgotPassword .middle li:last-of-type{ background: url(../assets/image/ic_login_verificatcode@2x.png) 0.1rem 0.4rem no-repeat; background-size: 0.4rem; }
	.forgotPassword .middle li input { border: none; font-size: 0.3rem; width: 100%; }
	.forgotPassword .middle li:last-of-type input { width: 60%; }
	.forgotPassword .middle li:last-of-type button { 
		width: 38%; background: #fff; border: none; border-left: solid 0.01rem #ddd;
		line-height: 0.6rem; color: #3a9fff; font-size: 0.3rem;
	}
	.forgotPassword .bottom p.noActive{ 
		height: 1rem; width: 6.7rem; border-radius: 2rem; margin-left: 0.4rem;
		background: #ddd; line-height: 1rem; text-align: center;
		font-size: 0.34rem; color: #fff; margin-top: 0.6rem;
	}
	.forgotPassword .bottom a p.active { 
		height: 1rem; width: 6.7rem; border-radius: 2rem; margin-left: 0.4rem;
		background: #fce86c; color: #111; line-height: 1rem; text-align: center;
		font-size: 0.34rem; margin-top: 0.6rem;
	}
	.forgotPassword .layer { 
		padding: 10px 20px; background: rgba(0,0,0,0.4); position: fixed; top: 24%; left: 25%; 
		color: #fff;
	}
</style>

<script type="text/javascript">
	import $ from "jquery"
	export default{
		name: "setPassword",
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

			that.$store.state.passwordOrigin = "forgotPassword";

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
			$("input[name='verificationCode']").blur(function(){
				var verificationCode = $(this).val();
				if (!/^\d{4}$/.test(verificationCode)) {
					$(this).focus();
					that.message = "请输入4位的验证码";
					that.layer = true;
					setTimeout(function(){
						that.layer = false;
					} ,2000)
				}
			})
		},
		methods: {
			getVerificationCode: function(){
				var data = {
                    phone: $("input[name='mobile']").val(), //   string  是   手机号
                    mode: 1 //string "0"为注册，“1”为修改密码
                };
				this.$http.post('/api/v3/user/sms-captcha',data,{emulateJSON: true}).then(function(res){
					if (res.body.status_code==200) {
						$(".specialBtn").text("59"+"秒");
						var content = parseInt($(".specialBtn").text());
						var timer = setInterval(function(){
							content--;
							if (content==0) {
								clearInterval(timer);
								$(".specialBtn").text("获取验证码");
							}else{
								$(".specialBtn").text(content+"秒");
							}
						} ,1000)
					}else{
						alert(res.body.message);
					}
				}, function(error){
					console.log(error);
				})
			},
			verifyCode: function(){
				var data = {
					phone: $("input[name='mobile']").val(),
					mode: "1",
					captcha: $("input[name='verificationCode']").val()
				};
				this.$http.post('/api/v3/user/check-captcha',data,{emulateJSON: true}).then(function(res){
					if (res.body.status_code==200) {
						localStorage.setItem("userName", data.phone);
						localStorage.setItem("verificationCode", data.captcha);
						location.hash = "setPassword";
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
					if (/^(0|86|17951)?(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$/.test(this.$refs.type1.value) && /^\d{4}$/.test(this.$refs.type2.value)) {
						this.isActive = true;
					}// ref用来给元素或子组件注册引用信息。引用信息将会注册在父组件的$refs对象上。如果在普通DOM元素上使用，引用指向的就是DOM元素（$refs 返回所有注册过ref的DOM元素）;如果在子组件上，引用就指向组件实例。
					else{
						this.isActive = false;
					}
				},
				deep: true				
			}
		}
	}
</script>