<template>
	<div class="changeDetail_income">
		<ul class="content">
			<li>
				<h3>充值</h3>
				<span>2017/04/16  14:20:23</span>
				<span>+98.30</span>
			</li>
			<li>
				<h3>退款</h3>
				<span>2017/04/16  14:20:23</span>
				<span>+198.30</span>
			</li>
			<li>
				<h3>利息</h3>
				<span>2017/04/16  14:20:23</span>
				<span>+1198.30</span>
			</li>
			<li>
				<h3>白送</h3>
				<span>2017/04/16  14:20:23</span>
				<span>+99998.30</span>
			</li>
			<li>
				<h3>想得美</h3>
				<span>2017/04/16  14:20:23</span>
				<span>+999998.30</span>
			</li>
			<li>
				<h3>充值</h3>
				<span>2017/04/16  14:20:23</span>
				<span>+98.30</span>
			</li>
			<li>
				<h3>退款</h3>
				<span>2017/04/16  14:20:23</span>
				<span>+198.30</span>
			</li>
			<li>
				<h3>利息</h3>
				<span>2017/04/16  14:20:23</span>
				<span>+1198.30</span>
			</li>
			<li>
				<h3>白送</h3>
				<span>2017/04/16  14:20:23</span>
				<span>+99998.30</span>
			</li>
			<li>
				<h3>想得美</h3>
				<span>2017/04/16  14:20:23</span>
				<span>+999998.30</span>
			</li>
		</ul>
		<p class="loadMore">到底了，别拉啦...</p>
	</div>
</template>

<style type="text/css" scoped>
	.content li{
		border-bottom: solid 0.01rem #dedfe0;
		padding: 0.2rem 0;
	}
	.content li h3{
		font-weight: normal;
	}
	.content li span:first-of-type{
		display: inline-block;
		font-size: 0.24rem;
		color: #aaa;
		margin: 0.12rem 0;
	}
	.content li span:last-of-type{
		float: right;
		font-size: 0.32rem;
		color: #ff5e5e;
		margin-top: -0.1rem;
	}
	.loadMore{
		text-align: center;
		font-size: 0.24rem;
		color: #9a9a9a;
		margin-top: 0.2rem;
		padding-bottom: 0.6rem;
	}
</style>

<script type="text/javascript">
	import Vue from 'vue'
	import VueResource from 'vue-resource'
	Vue.use(VueResource)
	export default {
		name: 'changeDetail_income',
		data(){
			return {

			}
		},
		mounted: function(){
			if (!localStorage.getItem("_vt")) {
				location.hash = "/";
				return;
			}
			this.$http.get("/api/v5/wallet/wallet-list?_vt="+localStorage.getIntem("_vt")).then(function(res){
				
			},function(res){
				console.log("请求失败");
			})
		},
		components: {

		},
		methods: {
			
		}
	}
</script>