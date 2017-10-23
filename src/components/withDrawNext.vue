<template>
	<div class="withDrawNext">
		<x-header :left-options="{backText: ''}">提现</x-header>
		<div class="blank20"></div>
		<div class="content">
			<ul>
				<li>
					<span>真实姓名</span>
					<span>小唯</span>
				</li>
				<li>
					<span>银行卡类型</span>
					<span>招商银行</span>
				</li>
				<li>
					<span>银行卡号</span>
					<span>6225 2456 1452 834</span>
				</li>
				<li>
					<span>提现金额</span>
					<span><input type="num" name="" placeholder="最少可提现100元"></span>
				</li>
			</ul>
			<p>可提现金额： ￥ 800.00</p>
			<p>提现</p>
			<router-link to="/withDrawRule"><p>《提现规则说明》</p></router-link>
		</div>
	</div>
</template>

<style type="text/css" scope="" lang="less">
	.withDrawNext{
		font-size: 0.3rem; color: #111;
		.blank20{ clear: both; height: 0.4rem; }
		.vux-header{ 
			background: #fff; 
			.vux-header-title{ color: #111; }
		}
		.content{
			background: #fff; padding-left: 0.32rem; padding-bottom: 0.4rem;
			ul{
				li{
					height: 1rem; line-height: 1rem; border-bottom: solid 0.01rem #ddd;
					span{
						&:first-of-type{ display: inline-block; width: 1.6rem; margin-right: 0.36rem;}
						input{ border: none; }
					}
				}
			}
			&>p{
				&:first-of-type{ 
					font-size: 0.28rem;width: 5.34rem;margin-left: 1.96rem;
					height: 0.56rem; line-height: 0.56rem;background: #fef9ec;
					padding-left: 0.1rem;margin-bottom: 0.72rem;
				}
				&:nth-of-type(2){ 
					font-size: 0.34rem;width: 6.3rem;height: 1rem;line-height: 1rem;
					background: linear-gradient(-105deg, #fce86c 2%, #ffe64b 100%);
					box-shadow: 0 0.02rem 0.08rem 0 rgba(0,0,0,0.1);
					border-radius: 2rem;text-align: center;margin-left: 0.3rem;
				}
			}
			a p{ text-align: center;margin: 0.2rem 0.3rem 0.2rem 0; }
		}
	}
</style>

<script type="text/javascript">
	import xHeader from "vux/src/components/x-header"
	export default {
		name: "withdrawNext",
		data(){
			return {

			};
		},
		mounted(){

		},
		methods: {

		},
		components: {
			xHeader
		}
	}
</script>