<template>
	<div class="noticeCenter">
		<p class="topTitle">
			<router-link to="/vipiao"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
			通知中心
		</p>
		<ul>
			<router-link to="/noticeInfo"><li>
				<img src="../assets/image/ic_notice@2x.png">
				<div>
					<p>【新功能】疯狂砍价上线啦！</p>
					<p>2017/10/14 14:02</p>
				</div>
			</li></router-link>
			<router-link to="/noticeInfo"><li>
				<img src="../assets/image/ic_notice@2x.png">
				<div>
					<p>【新功能】疯狂砍价上线啦！</p>
					<p>2017/10/14 14:02</p>
				</div>
			</li></router-link>
			<router-link to="/noticeInfo"><li>
				<img src="../assets/image/ic_notice@2x.png">
				<div>
					<p>【新功能】疯狂砍价上线啦！</p>
					<p>2017/10/14 14:02</p>
				</div>
			</li></router-link>
			<router-link to="/noticeInfo"><li>
				<img src="../assets/image/ic_notice@2x.png">
				<div>
					<p>【新功能】疯狂砍价上线啦！</p>
					<p>2017/10/14 14:02</p>
				</div>
			</li></router-link>
		</ul>
	</div>
</template>

<style type="text/css" scoped="">
	.noticeCenter{ font-size: 0.32rem; color: #111; }
	.noticeCenter .topTitle{
	  font-size: 0.34rem;line-height: 0.92rem;border-bottom: solid 0.01rem #ddd;
	  text-align: center;position: relative;background: #fff;color: #111; margin-bottom: 0.4rem;
	}
	.noticeCenter .topTitle img{width: 0.32rem;position: absolute;top: 0.3rem;left: 0.3rem;}
	.noticeCenter ul{ background: #fff; }
	.noticeCenter ul li { display: flex; padding-top: 0.24rem; }
	.noticeCenter ul li img{ 
		width: 0.36rem; height: 0.3rem; margin: 0.1rem 0.2rem 0 0.36rem; 
	}
	.noticeCenter ul li div{
		line-height: 0.58rem; border-bottom: solid 0.01rem #ddd; font-size: 0.3rem; width: 6.56rem;
	}
	.noticeCenter ul li div p:last-of-type{
		font-size: 0.28rem; color: #aaa; margin-bottom: 0.14rem;
	}
</style>

<script type="text/javascript">
	import $ from "jquery"
	export default {
		name: "noticeCenter",
		data(){
			return {

			};
		},
		mounted(){

		},
		methods: {

		},
		watch: {

		}
	}
</script>