<template>
	<div class="changeDetail_draw">
		<ul class="content">
			<li>
				<h3>体现中</h3>
				<span>2017/04/16  14:20:23</span>
				<span>-98.30</span>
			</li>
			<li>
				<h3>体现失败</h3>
				<span>2017/04/16  14:20:23</span>
				<span>-198.30</span>
			</li>
			<li>
				<h3>提现成功</h3>
				<span>2017/04/16  14:20:23</span>
				<span>-1198.30</span>
			</li>
			<li>
				<h3>体现中</h3>
				<span>2017/04/16  14:20:23</span>
				<span>-99998.30</span>
			</li>
			<li>
				<h3>提现成功</h3>
				<span>2017/04/16  14:20:23</span>
				<span>-999998.30</span>
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
	export default {
		name: 'changeDetail_draw',
		data(){
			return {

			}
		},
		components: {

		},
		methods: {
			
		},
		mounted(){
			
		}
	}
</script>