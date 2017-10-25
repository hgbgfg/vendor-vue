<template>
	<div class="distribution">
		<div class="topTitle">		
			<router-link to="/manageOrder/1"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
			发货
			<a href="tel://4000309755" class="customServer">联系客服</a>
		</div>
		<div class="orderInfo">
			<div class="top">
				<p>订单编号：</p>
				<p>接单时间：&nbsp;&nbsp;<span>2016.12.20 16:43:00</span><span>待发货</span></p>
			</div>
			<div class="middle">					
				<img src="../assets/image/20170623105610.jpg" class="left">
				<div class="right">
					<p>张惠妹“乌托邦2.0庆典”世界巡回演唱会</p>
					<div>							
						<p>2017/09/18  周三  19:30</p>
						<p>深圳  华润深圳湾体育中心</p>
						<p>票档  ￥380</p>
					</div>
				</div>
				<span>￥450</span>
				<span>x2</span>
			</div>
			<div class="bottom">
				<p>合计：<span>￥</span><span>900</span></p>
			</div>
		</div>
		<div class="venderAddress">
			<div class="left">收货信息</div>
			<div class="right">
				<p>
					联系人： <span>张亮亮</span>&nbsp;&nbsp;&nbsp;
					电话： <span>13718247356</span>
				</p>
				<textarea disabled="">北京市海淀区北四环西路辅路中国技术交易大厦A座1818</textarea>
			</div>
		</div>
		<ul class="logisticsInfo">
			<li>物流公司 <input type="text" name="" placeholder="请选择物流公司" v-model="items.expressName" ref="name"><img src="../assets/image/ic_arrow_right@2x.png"></li>
			<li>物流单号 <input type="text" name="" placeholder="请输入物流单号" v-model="items.expressNum" ref="num"></li>
			<li>
				<p>上传照片</p>
				<!-- <p class="expressSingle">
					<img :src="expressSingle">
				</p>
				<input type="file" accept="image/*" id="imgUpload" @click="updateImg"> -->
				<div class="avatarWrapper">
                	<div id="avatorUpload"></div>
	            </div>
			</li>
		</ul>
		<div v-if="activeConfirm">
			<router-link to="/manageOrder/2"><p class="confirmBtn" style="background: #FCE76C;color: #2d2d2d;">确认发货</p></router-link>
		</div>
		<div v-else>
			<p class="confirmBtn">确认发货</p>
		</div>
	</div>
</template>

<style type="text/css" scoped>
	@import "../../static/css/distribution.css"
</style>

<script type="text/javascript">
	import $ from "jquery"
	export default {
		name: "distribution",
		data(){
			return {
				activeConfirm: false,
				items: {
					expressName: "",
					expressNum: ""
				},
				expressSingle: require("../assets/image/bg_order_upload_img@2x.png")
			};
		},
		mounted(){
			if (!localStorage.getItem("_vt")) {
				location.hash = "/";
				return;
			}
			this.changeHeaderImg();
		},
		methods: {
			updateImg: function(e){
				var that = this;
				$("#imgUpload").change(function(e) {  
		            var file = e.target.files[0];            
		            var freader = new FileReader();  
		            freader.readAsDataURL(file);  
		            freader.onload = function(e) {
		              that.expressSingle = e.target.result;
		          	}  
		        });  
			},
			changeHeaderImg: function(){
				var that = this;
				var uploadFile = that.$util.uploadFile();
				var up = $('#avatorUpload').Huploadify({
		            auto: true,
		            fileTypeExts: '*.jpg;*.jpeg;*.png;*.JPG;*.JPEG;*.PNG;',
		            multi: false,
		            fileObjName: 'upfile',
		            formData: {
		            	"_vt": localStorage.getItem("_vt"),
		                'upload_dir':'upload/header'
		            },
		            fileSizeLimit: 99999999999,
		            showUploadedPercent: false,
		            showUploadedSize: false,
		            removeTimeout: 9999999,
		            uploader:"/api/v3/user/user-data",
		            onUploadStart: function(file) {
		                console.log(file.name + '开始上传');
		            },
		            onInit: function(obj) {
		                // console.log('初始化');
		            },
		            onUploadComplete: function(file, res) {
		                //console.log(file.name + '上传完成');
		                var data = JSON.parse(res);
		                console.log(data);
		                $("#avatorUpload").css("backgroundImage", "url('"+data.data.user.header+"')");
		                // updateUser('userForm', data.data.header);

		            },
		            onCancel: function(file) {
		                console.log(file.name + '删除成功');
		            },
		            onClearQueue: function(queueItemCount) {
		                console.log('有' + queueItemCount + '个文件被删除了');
		            },
		            onDestroy: function() {
		                console.log('destroyed!');
		            },
		            onSelect: function(file) {
		                console.log(file.name + '加入上传队列');
		            },
		            onQueueComplete: function(queueData) {
		                console.log('队列中的文件全部上传完成', queueData);
		            }
		        });
			}
		},
		watch: {
			items: {
				handler: function(){
					if (this.$refs.name.value && this.$refs.num.value) {
						this.activeConfirm = true;
					}else{
						this.activeConfirm = false;
					}
				},
				deep: true
			}
		}
	}
</script>