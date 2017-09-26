<template>
	<div class="grabVote">
		<show-type v-bind:programCategory="programCategory" v-on:getCategroyFromChild="showCategoryFromChild" class="fillterPage"></show-type>
		<div class="topTitle">
			<router-link to="/"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
			<p class="searchBar">
				<img src="../assets/image/icon_order_search@2x.png">
				<input type="text" name="search" placeholder="请输入节目名称">
			</p>
			<router-link to="/manageOrder"><div class="hasGrabed">
				<img src="../assets/image/icon_order_yqbtn@2x.png">
				<p>已抢订单</p>
			</div></router-link>
		</div>
		<ul class="filter">
			<li data-type="orderMoney" @click="tabOrderWay">
				订单金额<span v-if="lowHighByMoney == true"><img src="../assets/image/lowHigh.png" data-type="orderMoney"></span>
				<span v-else><img src="../assets/image/highLow.png" data-type="orderMoney"></span>
			</li>
			<li data-type="orderTime" @click="tabOrderWay">
				演出时间<span v-if="lowHighByTime == true"><img src="../assets/image/lowHigh.png" data-type="orderTime"></span>
				<span v-else><img src="../assets/image/highLow.png" data-type="orderTime"></span>
			</li>
			<li data-type="orderClassify" @click="tabOrderWay">
				筛选<span v-if="filtered == false"><img src="../assets/image/icon_order_screen@2x.png" data-type="orderClassify"></span>
				<span v-else><img src="../assets/image/icon_order_screen_s@2x.png" data-type="orderClassify"></span>
			</li>
		</ul>
		<ul class="programList">
			<li v-for="item in listData">
				<div class="left"><img v-bind:src="item.portrait_id"></div>
				<div class="right">
					<p>{{item.title}}</p>
					<div>
						<p>{{item.scenes[0].start_time}}</p>
						<p>{{item.scenes[0].city_name}}&nbsp;&nbsp;{{item.scenes[0].venue.name}}</p>
						<p>票档&nbsp;&nbsp;￥ {{item.scenes[0].fares[0]}}</p>
					</div>
					<p>￥ <span>{{item.scenes[0].lowest_price}}</span></p>
					<span class="grabBtn">抢单</span>
				</div>
				<p class="votesNum">x2</p>
			</li>
		</ul>
		<p class="loadMore">玩命加载中...</p>
		<div class="mask"></div>
	</div>
</template>

<style scoped>
	@import "../../static/css/grabVotes.css"
</style>
<script>
	import Vue from 'vue'
	import VueResource from 'vue-resource'
	import $ from 'jquery'
	import ShowType from './childComponent/ShowType'
	Vue.use(VueResource)
	export default {
		name: 'grabVote',
		data(){
			return {
				page: 1,
				page_size: 10,
				web: 123,
				isLoading: false,
				hasMore: true,
				listData: [],
				programCategory: [],
				lowHighByMoney: true,
				lowHighByTime: true,
				filtered: false
			}
		},
		created(){
			var data = "page="+this.page+"&page_size="+this.page_size+"&web="+this.web;
			this.getListData(data);
		},
		components: {
			ShowType
		},
		methods: {
			getListData: function(data){
				var that = this;
				if (!that.hasMore) return;
				if(that.isLoading) return;
				that.isLoading = true;
				this.$http.get("/api/v5/home/data?"+data).then(function(res){
					if (res.body.status_code==200) {
						console.log(res);
						that.programCategory = res.body.data.program_category;
						that.listData = that.listData.concat(res.body.data.program_list.programs);
						that.isLoading = false;
						that.page = that.page + 1;
						var total = res.body.data.program_list.pagination.total;
						var curPage = res.body.data.program_list.pagination.current_page;
						if (total <= curPage*that.page_size) {
							$(".loadMore").text("别拉啦，没有了...");
							that.hasMore = false;
						}
					}
				}, function(res){

				})
			},
			scrollUpdata: function(){// 上拉加载更多
				var ele = $(".loadMore").get(0);
				var eleTop = ele.getBoundingClientRect().top;
				var viewTop = this.getViewPort()["height"];
				if (eleTop < viewTop) {
					var data = "page="+this.page+"&page_size="+this.page_size+"&web="+this.web;
					this.getListData(data);
				}
			},
			getViewPort: function(){// 获取视窗宽高
				if (document.compatMode == 'BackCompat') {
					return {
						width: document.body.clientWidth,
						height: document.body.clientHeight
					};
				}else{
					return {
						width: document.documentElement.clientWidth,
						height: document.documentElement.clientHeight
					};
				}
			},
			tabOrderWay: function(event){
				var orderType = $(event.target).data("type");
				switch(orderType){
					case "orderMoney":
						this.lowHighByMoney = !this.lowHighByMoney;
						$(event.target).closest("li").css("color", "#ff4a53");
						break;
					case "orderTime":
						this.lowHighByTime = !this.lowHighByTime;
						$(event.target).closest("li").css("color", "#ff4a53");
						break;
					case "orderClassify": 
						$(".fillterPage, .mask").show();
						break;
				}
			},
			showCategoryFromChild: function(data){
				if (Object.keys(data.idArr).length==0 && data.lowPrice == "" && data.highPrice == "" && data.startTime == "" && data.endTime == "") {
					this.filtered = false;
					$(".filter li:eq(2)").css("color", "#2d2d2d");
				}else{
					this.filtered = true;
					$(".filter li:eq(2)").css("color", "#ff4a53");
				}
				console.log(data);
			},
		},
		mounted(){
			$(".grabVote")[0].addEventListener("scroll", this.scrollUpdata);
			this.$store.state.fromPage = "grabVotes";
		}
	}
</script>