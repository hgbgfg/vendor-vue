<template>
	<div class="withdrawRule">
		<p><x-header :left-options="{backText: ''}">提现规则</x-header></p>
		<div class="blank20"></div>
		<ul>
			<li>
				1.单次提现金额需不小于100元。
			</li>
			<li>
				2.如发现套现行为，将默认退回原充值账户。
			</li>
			<li>
				3.提现申请提交后，将在1-3个工作日内打款到指定账户。
			</li>
			<li>
				4.客服联系电话：<a href="tel://4000309755">400-030-9755</a>
			</li>
		</ul>
	</div>
</template>

<style>
	*{padding: 0;margin: 0;}
	ul, ol, li{list-style: none;}
	.blank20{clear: both;height: 0.4rem;background: #f7f7f7;}
	.vux-header{background: #fff;}
	.vux-header-title-area, .vux-header .vux-header-title{color: #111;}
	.withdrawRule{font-size: 0.3rem;}
	.withdrawRule ul{padding: 0.3rem;line-height: 0.6rem;color: #111;clear: both;}
	.withdrawRule ul li div{font-size: 0.28rem;margin-left: 1em;}
</style>

<script>
	import XHeader from "vux/src/components/x-header"
	export default {
		name: 'withdrawRule',
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