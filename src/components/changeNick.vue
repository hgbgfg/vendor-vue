<template>
	<div class="changeNick">
		<p class="topTitle">
			<router-link to="/personalInfo">取消</router-link>
			修改昵称
			<span @click="save">保存</span>
		</p>
		<div class="nickName">昵称<input type="text" name="" placeholder="请输入昵称"></div>
	</div>
</template>

<style type="text/css" scoped="" lang="less">
	.changeNick{ 
		@color: #111;
		@font-size: 0.32rem;
		@init-blue: #3a9fff;
		@border-bottom: solid 0.01rem #ddd;

		font-size: @font-size; color: @color; 

		.topTitle {
			font-size: 0.34rem;line-height: 0.92rem;border-bottom: @border-bottom;
			text-align: center;position: relative;background: #fff;color: @color;

			a{ color: #4d4d4d;float: left;margin-left: 0.3rem; }
			span{ color: @init-blue;float: right;margin-right: 0.3rem; 
				&:after {content: " √ ";font-size: 0.3rem;height: 0.3rem;clear: both;}
			}
		}
		.nickName{ 
			height: 1rem;line-height: 1rem;background: #fff;margin-top: 0.2rem;padding: 0 0.3rem;border-top: solid 0.01rem #ddd;border-bottom: @border-bottom;
			input{ font-size: 0.3rem;border: none;text-align: right;margin-left: 0.4rem;width: 5.6rem;padding: 0.3rem 0 0.4rem 0; }
		}
	}
</style>

<script type="text/javascript">
	import $ from "jquery"
	export default {
		name: "changeNick",
		data(){
			return {

			};
		},
		mounted(){
			if (!localStorage.getItem("_vt")) {
				location.hash = "/";
				return;
			}
		},
		methods: {
			save: function(){
				if (!$(".nickName input").val().trim()) {
					alert("请输入昵称");
					return;
				}
				var that = this;
				var data = {
					_vt: localStorage.getItem("_vt"),
					nick_name: $(".nickName input").val()
				};
				that.$http.post("/api/v3/user/update-user-data", data, {emulateJSON: true}).then(function(res){
					if (res.body.status_code==200) {
						location.hash = "personalInfo";
					}else{
						alert(res.body.message);
					}
				}, function(error){
					console.log(error);
				})
				/*that.$ajax({ // 后台未处理对象格式的参数传递，故返回更新失败
					method: 'post',
					url: '/api/v3/user/update-user-data',
					data: data,
					headers: {
		              	'Content-Type': 'application/json',
		              	'X-Requested-With': 'XMLHttpRequest'
		            },
				}).then(function(res){
					console.log(res.data.status_code);
					alert(res.data.message);
					if (res.data.status_code==200) {
						location.hash = "personalInfo";
					}
				}).catch(function(error){
					console.log(error);
				})*/
			}
		}
	}
</script>