<template>
	<div class="myWallet">
		<div class="top">
			<x-header :left-options="{backText: ''}">我的钱包
				<router-link to="/notice" slot="right">说明</router-link>
			</x-header>
			<div class="canWithdraw">
				<img src="../assets/image/wallet1.png">
				<ul>
					<li>
						可提现金额
						<router-link to="/withDraw"><img src="../assets/image/ic_nav_cutphoto_backarrow@2x.png"></router-link>
					</li>
					<li>￥<span> 87692.00</span></li>
				</ul>
			</div>
		</div>
		<div class="middle"></div>
		<div class="bottom">
			<ul>
				<li>
					<router-link to="/"><p>可用余额<img src="../assets/image/ic_nav_nextarrow@2x.png"><span>￥99999.00 </span></p></router-link>
				</li>
				<li>
					<router-link to="/changeDetail">收支明细<img src="../assets/image/ic_nav_nextarrow@2x.png"></router-link>
				</li>
			</ul>
			<div class="middle"></div>
			<p>
				<router-link to="/">
					我的银行卡
					<img src="../assets/image/ic_nav_nextarrow@2x.png">
					<span>未绑定</span>
				</router-link>
			</p>
		</div>
	</div>
</template>

<style>
	@import '../../static/css/myWallet.css'
</style>

<script>
	import XHeader from 'vux/src/components/x-header'
	/*import Actionsheet from 'vux/src/components/actionsheet'
	import ButtonTab from 'vux/src/components/button-tab/button-tab'
	import ButtonTabItem from 'vux/src/components/button-tab/button-tab-item'*/
	export default {
		name: 'myWallet',
		data(){
			return {

			}
		},
		components: {
			XHeader,
			/*Actionsheet,
			ButtonTab,
			ButtonTabItem*/
		},
		mounted: function(){
			localStorage.setItem("selectedIncome", true);
			localStorage.setItem("selectedDraw", false);
			localStorage.setItem("selectedDeposit", false);
		},
		methods: {

		}
	}
</script>