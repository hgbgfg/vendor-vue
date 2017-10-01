<template>
	<div class="bindCard">
		<div class="topTitle">		
			<router-link to="/myWallet"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
			绑定银行卡
		</div>
		<div class="container">
			<ul>
				<li>真实姓名<input type="text" name="" placeholder="请输入姓名"></li>
				<li>银行卡号<input type="text" name="" placeholder="请输入银行卡号"></li>
				<li>开户银行<input type="text" name="" placeholder="请选择开户银行"></li>
			</ul>
			<p class="tips">*仅可使用储蓄卡，不可填写信用卡。</p>
			<p class="confirm">确定</p>
		</div>
	</div>
</template>

<style type="text/css" scoped>
	@import "../../static/css/bindCard.css"
</style>

<script type="text/javascript">
	import $ from "jquery"
	export default {
		name: "bindCard",
		data(){
			return {

			}
		},
		mounted(){

		},
		methods: {

		}
	}
</script>