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
					front: 'data:image/png;base64,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',
					back: 'data:image/png;base64,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'
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