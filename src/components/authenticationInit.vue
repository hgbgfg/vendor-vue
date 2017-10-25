<template>
	<div class="authenticationInit">
		<p class="topTitle">
			<img src="../assets/image/ic_nav_backarrow.png" @click="back">
			身份认证
			<a href="tel:4000309755">客服</a>
		</p>
		<div class="content">
			<p>*您还没有绑定身份证，成功绑定后才能抢单</p>
			<ul>
				<li class="second">
					身份信息 (必填)
				</li>
				<li class="third">
					真实姓名
					<input type="text" name="" placeholder="请输入姓名" v-model="items.realName" ref="realName">
				</li>
				<li class="four">
					身份证号
					<input type="text" name="" placeholder="请输入身份证号" v-model="items.idCard" ref="idCard" class="idCard">
				</li>
			</ul>
		</div>
		<ul>
			<li class="second" style="position: relative;z-index: 5;">
				身份证照片 (必填)
			</li>
			<li class="third" style="border-bottom: none;padding-bottom: 0;">
				<p style="position: relative;z-index: 5;background: #fff">身份证正面照</p>
				<ul style="display: flex;">
					<li style="position: relative;z-index: 3;">
						<input type="file" name="imgUpload" id="imgUpload" @click="updateFrontImg" style="position: absolute;top: -1.9rem;left: 0;z-index: 2;width: 3.6rem;height: 4.2rem;font-size: 0;border: none;margin-left: 0;" ref="frontImg"> 
						<img v-bind:src="items.front" id="uploadhead" style="width: 3.6rem;height: 2.24rem;position: absolute;top: 0;left: 0;z-index: 1;margin-left: 0;">
					</li>
					<li>
						示例：<img src="../assets/image/pic_idcard_exp01@2x.png">
					</li>
				</ul>
			</li>
			<li class="forth" style="border-bottom: none;">
				<p style="position: relative;z-index: 3;background: #fff">身份证反面照</p>
				<ul style="display: flex;">
					<li>
						<input type="file" name="imgUpload" id="imgUploadBack" @click="updateBackImg" style="position: absolute;top: -1.65rem;left: 0;z-index: 2;width: 3.6rem;height: 4.2rem;font-size: 0;border: none;margin-left: 0;" ref="backImg"> 
						<img v-bind:src="items.back" id="uploadhead" style="width: 3.6rem;height: 2.24rem;position: absolute;top: 0.3rem;left: 0;z-index: 1;margin-left: 0;">
					</li>
					<li>
						示例：<img src="../assets/image/pic_idcard_exp02@2x.png">
					</li>
				</ul>
			</li>
		</ul>
		<p class="submit actived" v-if="isActive" @click="submitData">提交</p>
		<p class="submit" v-else="isActive">提交</p>
		<!-- 提交成功弹窗 -->
		<div v-show="successSubmit">
			<div class="successLayer">
				<p><img src="../assets/image/pic_popup_idcard_suces@2x.png"> 提交成功</p>
				<p>运营人员将在1-3个工作日内审核，请耐心等待</p>
				<router-link to="/personalInfo"><p>好的，我知道了</p></router-link>
			</div>
			<div class="mask"></div>
		</div>
	</div>
</template>

<style type="text/css" scoped="" lang="less">
	.authenticationInit{ 
		font-size: 0.32rem; color: #111;background: #fff;padding-bottom: 0.32rem; 
		.topTitle{
		    font-size: 0.34rem;line-height: 0.92rem;border-bottom: solid 0.01rem #ddd;
		    text-align: center;position: relative;background: #fff;color: #111;
			img{width: 0.32rem;position: absolute;top: 0.3rem;left: 0.3rem;}
			a{ float: right; margin-right: 0.3rem; }
		}
		.content{ 
			p { font-size: 0.24rem; color:  #FFA428; padding: 0.12rem 0.3rem 0.14rem; background: #fffdf2; border-bottom: solid 0.01rem #ddd; }
		}
		ul{ 
			position: relative; 
			li{ 
				border-bottom: solid 0.01rem #ddd; padding: 0.3rem; background: #fff;
				img{
					width: 0.28rem; margin-left: 0.2rem; vertical-align: middle; float: right; 
				}
				input{
					font-size: 0.3rem; margin-left: 0.4rem;text-align: right;
					width: 5rem;border: none;
				}
				&.second{ font-size: 0.24rem;color: #aaa;background: #f5f5f5;}
				ul {
					li {
						&:first-of-type{
							width: 3.6rem;margin: 0.3rem 0.6rem 0.3rem 0;
							border-bottom: none;height: 2.24rem;padding: 0;
						}
						&:last-of-type{
							padding: 0; line-height: 3rem; border-bottom: none;
							font-size: 0.24rem;color: #aaa;
						}
						&:last-of-type {
							img{width: 1.6rem; margin-top: 1rem;}
						}
					}
				}
			}
		}
		.submit{ 
			width: 6.7rem;height: 1rem;line-height: 1rem;margin-left: 0.4rem; 
			text-align: center;color: #fff;background: #ddd;border-radius: 2rem;
		}
		.actived{ color: #111; background: linear-gradient(-105deg, #FCE86C 2%, #FFE64B 100%) }
		/*成功弹框样式*/
		.successLayer{ 
			position: fixed;top: 30%;z-index: 10;background: #fff;width: 5.9rem;
			margin-left: 0.8rem;border-radius: 0.24rem;padding: 0.4rem;
			box-sizing: border-box;text-align: center; 
			p {
				&:first-of-type{ font-size: 0.36rem;margin: 0.3rem 0; }
				&:first-of-type img{ width: 0.48rem;vertical-align: middle; }
				&:nth-of-type(2){ font-size: 0.24rem;color: #9d9d9d;
					line-height: 0.34rem;padding: 0 0.6rem; }
			}
			a { 
				p{ width: 5.1rem;height: 1rem;line-height: 1rem;background: #fce86c;border-radius: 2rem;margin-top: 0.4rem;margin-bottom: 0.2rem;box-shadow: 0 0.02rem 0.08rem 0 rgba(0,0,0,0.1); }
			}
			.mask{ position: fixed;top: 0;left: 0;background: rgba(0,0,0,0.6);z-index: 9;width: 100%;height: 100%; }
		}
	}
</style>

<script type="text/javascript">
	import $ from "jquery"
	export default {
		name: "authenticationInit",
		data () {
			return {
				successSubmit: false,
				isActive: false,
				items: {
					realName: '',
					idCard: '',
					front: require("../assets/image/btn_idcard_upload02@2x.png"),
					back: require("../assets/image/btn_idcard_upload01@2x.png")
				}
			};
		},
		mounted () {
			if (!localStorage.getItem("_vt")) {
				location.hash = "/";
				return;
			}
			var data = {
				_vt: localStorage.getItem("_vt")
			};
			this.$http.post("/api/v3/user/user-data", data, { emulateJSON:true }).then(function(res){
				if (res.body.status_code==200) {
					console.log(res.body.data);
				}
			}, function(error){
				console.log(error);
			})
		},
		methods: {
			back: function(){
				this.$router.go(-1);
			},
			updateFrontImg: function(e){
				var that = this;
				$("#imgUpload").change(function(e) {  
			        for (var i = 0; i < e.target.files.length; i++) {
			            var file = e.target.files.item(i);            
			            var freader = new FileReader();  
			            freader.readAsDataURL(file);  
			            freader.onload = function(e) {
			              that.items.front = e.target.result;
			          	}  
		            }  
		        });  
			},
			updateBackImg: function(e){
				var that = this;
				$("#imgUploadBack").change(function(e) {  
			        for (var i = 0; i < e.target.files.length; i++) {
			            var file = e.target.files.item(i);            
			            var freader = new FileReader();  
			            freader.readAsDataURL(file);  
			            freader.onload = function(e) {
			              that.items.back = e.target.result;
			          	}  
		            }  
		        });  
			},
			submitData: function(){
				if (!this.$util.IdCardValidate($(".idCard").val())) {
					this.successSubmit = false;
					alert("请输入正确的身份证号");
					return;
				}
				this.successSubmit = true;
			}
		},
		watch: {
			items: {
				handler: function(val, oldVal){
					if (this.$refs.realName.value && this.$refs.idCard.value && this.$refs.frontImg.value && this.$refs.backImg.value) {
						this.isActive = true;
					}else{
						this.isActive = false;
					}
				},
				deep: true
			}
		}
	} 
</script>