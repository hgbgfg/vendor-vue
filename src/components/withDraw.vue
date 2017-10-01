<template>
	<div class="withDraw">
		<x-header :left-options="{backText: ''}">提现</x-header>
		<div class="blank20"></div>
		<div class="content">
			<p><img src="../assets/image/ic_personal_icon_purse_nor@2x.png"></p>
			<p>可提现金额</p>
			<p>￥<span>87692.00</span></p>
			<p v-on:click="withdraw">提现</p>
			<router-link to="/withdrawRule">《提现规则说明》</router-link>
		</div>

		<div class="mask" v-if="showMask"></div>
		<div class="toast_noOpen" v-if="showNoOpenedToast">
			<p><img src="../assets/image/ic_popup_close@2x.png" class="close" @click="close"></p>
			<p><img src="../assets/image/ic_bank_card_unautherized@2x.png"></p>
			<p>您还未绑定银行卡</p>
			<p>提现需先绑定银行卡</p>
			<router-link to="/bindCard"><p>去绑定</p></router-link>
		</div>
	</div>
</template>

<style scoped>
	@import '../../static/css/withDraw.css'
</style>

<script>
	import XHeader from 'vux/src/components/x-header'
	export default {
		name: 'withDraw',
		data(){
			return {
				showMask: false,
				showNoOpenedToast: false
			}
		},
		components: {
			XHeader
		},
		methods: {
			withdraw: function(){
				this.showMask = true;
				this.showNoOpenedToast = true;
			},
			close: function(){
				this.showMask = false;
				this.showNoOpenedToast = false;
			}
		}
	}
</script>