<template>
	<div class="manageOrder">
		<div class="topTitle">
			<span v-if="fromPage=='grabVotes'">				
				<router-link to="/grabVotes"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
			</span>
			<span v-else>
				<router-link to="/vipiao"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
			</span>
			订单管理
			<a href="tel://4000309755" class="customServer">联系客服</a>
		</div>
		<ul class="tabBtn">
			<li v-bind:class="{selected: $route.params.id=='1'}" v-on:click="curOrderStatus" data-status="1">待发货<span class="nums">12</span></li>
			<li v-bind:class="{selected: $route.params.id=='2'}" v-on:click="curOrderStatus" data-status="2">待确认</li>
			<li v-bind:class="{selected: $route.params.id=='3'}" v-on:click="curOrderStatus" data-status="3">已完成</li>
		</ul>
		<div class="venderAddress">
			<img src="../assets/image/icon_order_notice@2x.png">
			<p>统一收货地址：张亮亮，13718247389，中国技术交易大厦A座1818</p>
			<span v-on:click="closeVenderAddress">×</span>
		</div>
		<ul class="orderList">
			<li>
				<div class="top">
					<p>订单编号：</p>
					<p>此订单于&nbsp;&nbsp;<span> x</span>天&nbsp;&nbsp;<span> xx</span>小时&nbsp;&nbsp;<span>xx</span>分 后自动取消<span>待发货</span></p>
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
					<p><span>取消订单</span><span><router-link to="/distribution">确认发货</router-link></span></p>
				</div>
			</li>
			<li>
				<div class="top">
					<p>订单编号：</p>
					<p>此订单于&nbsp;&nbsp;<span> x</span>天&nbsp;&nbsp;<span> xx</span>小时&nbsp;&nbsp;<span>xx</span>分 后自动取消<span>待发货</span></p>
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
					<p><span>取消订单</span><span><router-link to="/distribution">确认发货</router-link></span></p>
				</div>
			</li>
		</ul>
	</div>
</template>

<style type="text/css" scoped>
	@import "../../static/css/manageOrder.css"
</style>

<script type="text/javascript">
	import $ from 'jquery'
	export default {
		name: "manageOrder",
		data(){
			return {
				fromPage: ""
			}
		},
		mounted(){
			if (!localStorage.getItem("_vt")) {
				location.hash = "/";
				return;
			}
			this.fromPage = this.$store.state.fromPage;
		},
		methods: {
			curOrderStatus: function(event){
				var status = $(event.target).data("status");
				if (status) {
					location.hash = "#/manageOrder/"+status;
				}
			},
			closeVenderAddress: function(){
				$(".manageOrder .venderAddress").hide();
				$(".manageOrder .orderList").css("margin-top", "1.84rem");
			}
		}
	}
</script>