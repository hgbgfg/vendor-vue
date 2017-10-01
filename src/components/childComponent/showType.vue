<template>
	<div class="showType">
		<h3>演出类型</h3>
		<ul>
			<li v-for="item in programC" :data-id="item.id" v-on:click="getCategoryId">
				{{item.title}}
				<img src="../../assets/image/bg_order_mk_selected@2x.png">
			</li>
		</ul>
		<h3>价格区间</h3>
		<ul>
			<li><input type="number" name="" placeholder="最低价" class="lowPrice"></li>
			———
			<li><input type="number" name="" placeholder="最高价" class="highPrice"></li>
		</ul>
		<h3>演出时间区间</h3>
		<ul>
			<li><input type="date" name="" placeholder="开始日期" class="startTime"></li>
			———
			<li><input type="date" name="" placeholder="结束日期" class="endTime"></li>
		</ul>
		<ol>
			<li @click="clearData">重置</li>
			<li v-on:click="sendCategoryToParent">确定</li>
		</ol>
	</div>
</template>

<style type="text/css" scoped>
	.showType{
		position: fixed;
		top: 0;
		left: 0.78rem;
		z-index: 2;
		background-color: #fff;
		width: 6.72rem;
		height: 100%;
	}
	.showType h3{
		font-size: 0.26rem;
		color: #2d2d2d;
		padding: 0.3rem;
		font-weight: normal;
	}
	.showType ul{
		display: flex;
		flex-wrap: wrap;
		font-size: 0.22rem;
		margin: 0 0.2rem;
		padding-bottom: 0.2rem;
		border-bottom: solid 0.02rem #f0f2f5;
	}
	.showType ul:nth-of-type(2){
		line-height: 0.3rem;
		color: #aaa;
	}
	.showType ul:nth-of-type(2) li{
		width: 2.6rem;
	}
	.showType ul:last-of-type{
		border-bottom: none;
		line-height: 0.3rem;
		color: #aaa;
	}
	.showType ul:last-of-type li{
		width: 2.6rem;
	}
	.showType ul li{
		width: 1.86rem;
		text-align: center;
		padding: 0.08rem 0;
		margin-bottom: 0.26rem;
		background-color: #f0f2f5;
		margin-right: 0.1rem;
		margin-left: 0.1rem;
		border-radius: 0.06rem;
		position: relative;
	}
	.showType ul li img{
		width: 0.33rem;
		position: absolute;
		right: 0;
		bottom: 0;
		display: none;
	}
	.showType ul input{
		width: 2.4rem;
		background-color: #f0f2f5;
		border: none;
		padding-left: 0.2rem;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		outline: none;
	}
	.showType ol{
		display: flex;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 7.5rem;
		box-sizing: border-box;
		font-size: 0.3rem;
		text-align: center;
		height: 0.76rem;
		line-height: 0.76rem
	}
	.showType ol li{
		width: 3.36rem;
	}
	.showType ol li:first-of-type{
		border-top: solid 0.01rem #ddd;
	}
	.showType ol li:last-of-type{
		background-color: #fce76c;
	}
	.showType .selected{
		background-color: #fffcec;
		border: solid 0.01rem #fce76c;
	}
</style>

<script type="text/javascript">
	import $ from 'jquery'
	export default {
		name: "showType",
		props: ["programC"],
		data(){
			return {
				selected: false,
				idArr: {}
			}
		},
		methods: {
			sendCategoryToParent: function(){// 将数据传给父组件
				this.$emit("getCategroyFromChild", {
					idArr: this.idArr,
					lowPrice: $(".lowPrice").val(),
					highPrice: $(".highPrice").val(),
					startTime: $(".startTime").val(),
					endTime: $(".endTime").val()
				});
				$(".showType, .mask").hide();
			},
			getCategoryId: function(event){
				var that = this;
				if (that.idArr.hasOwnProperty($(event.target).data("id"))) {
					delete that.idArr[$(event.target).data("id")];
					$(event.target).removeClass("selected").find("img").hide();
				}else{
					that.idArr[$(event.target).data("id")] = true;
					$(event.target).addClass("selected").find("img").show();
				}
			},
			clearData: function(){
				$(".showType li").removeClass("selected").find("img").hide().end().find("input").val("");
				this.idArr = {};
			}
		},
		mounted(){

		}
	}
</script>