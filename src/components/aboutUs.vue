<template>
	<div class="aboutUs">
		<p class="topTitle">
			<img src="../assets/image/ic_nav_backarrow.png" @click="back">
			关于我们
		</p>
		<ul>
			<li class="first">
				<img src="../assets/image/ic_setting_about_logo@2x.png">
				<p>版本号 1.0.0</p>
			</li>
			<li class="second">
				常见问题
				<img src="../assets/image/ic_arrow_right@2x.png">
			</li>
			<li class="third">
				评分鼓励一下
				<img src="../assets/image/ic_arrow_right@2x.png">
			</li>
		</ul>
	</div>
</template>

<style type="text/css" scoped="" lang="less">
	.aboutUs{ 
		font-size: 0.32rem; color: #111; 

		.topTitle{
		    font-size: 0.34rem;line-height: 0.92rem;border-bottom: solid 0.01rem #ddd;
		    text-align: center;position: relative;background: #fff;color: #111;
			img{width: 0.32rem;position: absolute;top: 0.3rem;left: 0.3rem;}
		}
		ul li{ 
			border-bottom: solid 0.01rem #ddd; padding: 0.3rem; background: #fff;
			img{
				width: 0.28rem; margin-left: 0.2rem; vertical-align: middle; float: right; 
				margin-top: 0.1rem;
			}
			span{
				font-size: 0.3rem; color: #7d7d7d; float: right;
			}
			&.first{ 
				height: 3rem; 
				img{ 
					width: 1.28rem; height: 1.28rem; position: absolute; top: 1.61rem; 
					left: 2.9rem;
				}
				p{ text-align: center; margin-top: 2.04rem; font-size: 0.28rem; color: #7d7d7d; }
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		name: "aboutUs",
		data () {
			return {

			};
		},
		mounted () {
			if (!localStorage.getItem("_vt")) {
				location.hash = "/";
				return;
			}
		},
		methods: {
			back: function(){
				this.$router.go(-1);
			}
		}
	} 
</script>