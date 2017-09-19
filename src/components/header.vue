<template>
	<tabbar class="tabbar">
		<div class="title">{{title}}</div>
		<tabbbar-item class="search"></tabbbar-item>
	</tabbar>
</template>

<style>
	.tabbar{
		background: #00cc66;
		height: 50px;
		position: relative;
	}
	.search{
		position: absolute;
		right: 5px;
		top: 5px;
		z-index: 999;
	}
	.title{
		text-align: center;
		margin: auto;
		line-height: 50px;
	}
</style>

<script>
	import Tabbar from 'vux/src/components/tabbar/tabbar'
	import TabbarItem from 'vux/src/components/tabbar/tabbar-item'
	export default{
		data(){
			return {
				title: '综合'
			}
		},
		name: 'tabbar',
		components: {
			Tabbar,
			TabbarItem
		},
		methods: {
			resultClick(item){
				console.log('you click the result item: ' + JSON.stringify(item))
			},
			getResult(val){
				this.result = val
			}
		},
	}
</script>