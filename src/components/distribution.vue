<template>
	<div class="distribution">
		<div class="topTitle">		
			<router-link to="/manageOrder:id=1"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
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
			<li>物流公司 <input type="text" name="" placeholder="请选择物流公司"><img src="../assets/image/ic_arrow_right@2x.png"></li>
			<li>物流单号 <input type="text" name="" placeholder="请输入物流单号"></li>
			<li>上传照片 <input type="file" accept="image/*" multiple></li>
		</ul>
		<p class="confirmBtn">确认发货</p>
	</div>
</template>

<style type="text/css" scoped>
	@import "../../static/css/distribution.css"
</style>

<script type="text/javascript">
	export default {
		name: "distribution",
		data(){
			return {

			}
		},
		mounted(){
			if (!localStorage.getItem("_vt")) {
				location.hash = "/";
				return;
			}
		},
		methods: {

		}
	}
</script>