<template>
	<div class="setPassword">
		<p class="topTitle">
			<router-link to="/login"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
			设置密码
		</p>
		<ul class="middle">
			<li>
				<input type="password" name="password" placeholder="请设置新密码（6~12位数字、字母组合）" v-model="items.value1" ref="type1">
			</li>
			<li>
				<input type="password" name="againPassword" placeholder="请再次输入新密码" v-model="items.value2" ref="type2">
			</li>
		</ul>
		<div class="bottom">
			<a href="javascript:;" v-if="isActive"><p v-bind:class="{active: isActive}" v-on:click="successChange">确定</p></a>
			<p class="noActive" v-else>确定</p>
		</div>
		<div class="layer" v-if="layer">{{message}}</div>
	</div>
</template>

<style type="text/css" scoped="">
	.setPassword{ font-size: 0.32rem; height: 13.34rem; background: #fff; }
	.setPassword .topTitle{
	  font-size: 0.34rem;line-height: 0.92rem;border-bottom: solid 0.01rem #ddd;
	  text-align: center;position: relative;background: #fff;color: #111;
	}
	.setPassword .topTitle img{width: 0.32rem;position: absolute;top: 0.3rem;left: 0.3rem;}
	.setPassword .middle{ margin: 0.4rem 0.6rem; }
	.setPassword .middle li{ height: 1.2rem; line-height: 1.2rem; border-bottom: solid 0.01rem #ddd; padding-left: 0.68rem; background: url(../assets/image/ic_login_password01@2x.png) 0.1rem 0.4rem no-repeat; background-size: 0.4rem; }
	.setPassword .middle li input { border: none; font-size: 0.3rem; width: 100%; }
	.setPassword .bottom p.noActive{ 
		height: 1rem; width: 6.7rem; border-radius: 2rem; margin-left: 0.4rem;
		background: #ddd; line-height: 1rem; text-align: center;
		font-size: 0.34rem; color: #fff; margin-top: 0.6rem;
	}
	.setPassword .bottom a p.active { 
		height: 1rem; width: 6.7rem; border-radius: 2rem; margin-left: 0.4rem;
		background: #fce86c; color: #111; line-height: 1rem; text-align: center;
		font-size: 0.34rem; margin-top: 0.6rem;
	}
	.setPassword .layer { 
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
			$("input[name='againPassword']").blur(function(){
				var againPassword = $(this).val();
				if (againPassword != $("input[name='password']").val()) {
					that.message = "两次密码输入不一致";
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
		},
		methods: {
			successChange: function(){
				var data = {
					userName: "13720081071",
					password: $("input[name='againPassword']").val(),
					captcha: localStorage.getItem("verificationCode")
				};
				this.$http.post("/api/v3/user/change-password", data, {emulateJSON: true}).then(function(res){
					if (res.body.status_code==200) {
						location.hash = "vipiao"
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
					if (/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,12}$/.test(this.$refs.type1.value) && this.$refs.type2.value == this.$refs.type1.value) {
						this.isActive = true;
						localStorage.setItem("password", this.$refs.type2.value);
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