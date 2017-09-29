<template>
	<div class="walletNotice">
		<p><x-header :left-options="{backText: ''}"><span>钱包说明</span></x-header></p>
		<div class="blank20"></div>
		<ul>
			<li>
				1.什么情况下钱款会转至钱包中？
				<div>
					<p>①对用户进行资金补偿时。</p>
					<p>②申请售后，由商家承担退货运费，退货运费退还至您的钱包。</p>
					<p>③使用钱包余额进行支付并发生了退款。</p>
				</div>
			</li>
			<li>
				2.钱包中的余额如何使用？
				<div>钱包中的余额可以购买商品使用，也可以提现。</div>
			</li>
			<li>
				3.余额如何提现？
				<div>
					<p>①提现时，请填写您真实的账户信息。</p>
					<p>②1天内仅限提现1次，提现金额范围1-500元。</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	*{padding: 0;margin: 0;}
	ul, ol, li{list-style: none;}
	a{text-decoration: none; color: #111;}
	.blank20{clear: both;height: 0.4rem;background: #f7f7f7;}
	.vux-header{background: #fff;}
	.walletNotice .vux-header h1.vux-header-title span{color: #111;}
	.walletNotice{font-size: 0.3rem;background: #fff;padding-bottom: 0.8rem;}
	.walletNotice ul{padding: 0.3rem;line-height: 0.6rem;color: #111;clear: both;}
	.walletNotice ul li div{font-size: 0.28rem;margin-left: 1em;}
</style>

<script>
	import XHeader from "vux/src/components/x-header"
	export default {
		name: 'walletNotice',
		data(){
			return {

			}
		},
		components: {
			XHeader
		},
		methods: {

		}
	}
</script>