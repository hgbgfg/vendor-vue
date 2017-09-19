<template>
	<tabbar class="AppFooter">
		<tabbar-item select>
			<img src="../assets/image/homeIcon2.png" slot="icon">
			<span slot="label">首页</span>
		</tabbar-item>
		<tabbar-item>
			<img src="../assets/image/programIcon1.png" slot="icon">
			<span slot="label">活动</span>
		</tabbar-item>
		<tabbar-item>
			<img src="../assets/image/programIcon1.png" slot="icon">
			<span slot="label">发现</span>
		</tabbar-item>
		<tabbar-item>
			<img src="../assets/image/mineIcon1.png" slot="icon">
			<span slot="label">我的</span>
		</tabbar-item>
	</tabbar>
</template>

<style>
	img{
		width: 40px;
		height: 40px;
	}
</style>

<script>
	import Tabbar from 'vux/src/components/tabbar/tabbar'
	import TabbarItem from 'vux/src/components/tabbar/tabbar-item'
	export default{
		name: 'AppFooter',
		data(){
			return{
				msg: ''
			}
		},
		components: {
			Tabbar,
			TabbarItem
		}
	}
</script>