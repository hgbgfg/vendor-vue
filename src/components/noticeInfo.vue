<template>
	<div class="noticeInfo">
		<p class="topTitle">
			<router-link to="/noticeCenter"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
			通知中心
		</p>
		<article>
			<p>【新功能】疯狂砍价上线啦！</p>
			<p>2017/10/14&nbsp;&nbsp; 14:02</p>
			<div>
				 唯票app(唯票网）为粉丝提供明星演出、体育赛事、明星资讯、粉丝应援等一体化服务，满足千万粉丝的娱乐追星体验。即是购票、抢票神器，也是爱豆一手资讯的发源地和死忠铁粉应援的集结地，你想要的，都在里。
			</div>
		</article>
	</div>
</template>

<style type="text/css" scoped="">
	.noticeInfo{ font-size: 0.32rem; color: #111; }
	.noticeInfo .topTitle{
	  font-size: 0.34rem;line-height: 0.92rem;border-bottom: solid 0.01rem #ddd;
	  text-align: center;position: relative;background: #fff;color: #111; margin-bottom: 0.4rem;
	}
	.noticeInfo .topTitle img{width: 0.32rem;position: absolute;top: 0.3rem;left: 0.3rem;}
	.noticeInfo article{background: #fff; padding: 0.3rem; padding-bottom: 1rem;}
	.noticeInfo article p:first-of-type{ font-size: 0.3rem; margin: 0.1rem 0; }
	.noticeInfo article p:last-of-type{ font-size: 0.28rem; margin: 0.2rem 0 0.3rem; color: #aaa; }
	.noticeInfo article div{ font-size: 0.28rem; line-height: 0.52rem;text-indent: 2em; }
</style>

<script type="text/javascript">
	export default {
		name: "noticeInfo",
		data(){
			return {

			};
		},
		mounted(){

		},
		methods: {

		}
	}
</script>