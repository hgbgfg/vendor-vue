<template>
	<div class="withDraw">
		<x-header :left-options="{backText: ''}">提现</x-header>
		<div class="blank20"></div>
		<div class="content">
			<p><img src="../assets/image/ic_personal_icon_purse_nor@2x.png"></p>
			<p>可提现金额</p>
			<p>￥<span>87692.00</span></p>
			<p>提现</p>
			<router-link to="/">《提现规则说明》</router-link>
		</div>
	</div>
</template>

<style>
	@import '../../static/css/withDraw.css'
</style>

<script>
	import XHeader from 'vux/src/components/x-header'
	export default {
		name: 'withDraw',
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