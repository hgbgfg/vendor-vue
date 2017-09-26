<template>
	<div class="changeDetail">
		<p class="topTitle">
			<router-link to="/myWallet"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
			收支明细
		</p>
		<ul class="tabMenu">
			<li v-bind:class="{selected: selectedIncome}" v-on:click="changeChild"><router-link to='/changeDetail/changeDetail_income' data-status="income"><img src="../assets/image/ic_personal_icon_purse@2x.png"> 进账</router-link></li>
			<li v-bind:class="{selected: selectedDraw}" v-on:click="changeChild"><router-link to='/changeDetail/changeDetail_draw' data-status="draw"><img src="../assets/image/ic_personal_icon_tixian@2x.png"> 提现</router-link></li>
			<li v-bind:class="{selected: selectedDeposit}" v-on:click="changeChild"><router-link to='/changeDetail/changeDetail_deposit' data-status="deposit"><img src="../assets/image/ic_personal_icon_yajin@2x.png"> 押金</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<style scoped>
	@import '../../static/css/changeDetail.css'
</style>

<script>
	import $ from 'jquery'
	import Tab from 'vux/src/components/tab/tab'
	import TabItem from 'vux/src/components/tab/tab-item'
	export default {
		name: 'changeDetail',
		data(){
			return {
				selectedIncome: location.href.indexOf("changeDetail_income")>-1 ? true :false,
				selectedDraw: location.href.indexOf("changeDetail_draw")>-1 ? true : false,
				selectedDeposit: location.href.indexOf("changeDetail_deposit")>-1 ? true : false
			}
		},
		created: function(){
			
		},
		mounted(){
			if (location.href.indexOf("changeDetail_income")==-1 && location.href.indexOf("changeDetail_draw")==-1 && location.href.indexOf("changeDetail_deposit")==-1) {
				this.selectedIncome = true;
			}
		},
		components: {
			Tab,
			TabItem
		},
		methods: {
			changeChild: function(event){
				var status = $(event.target).data("status");
				switch (status){
					case "deposit": 
						this.selectedIncome = false;
						this.selectedDraw = false;
						this.selectedDeposit = true;
						break;
					case "draw":
						this.selectedIncome = false;
						this.selectedDraw = true;
						this.selectedDeposit = false;
						break;
					default:
						this.selectedIncome = true;
						this.selectedDraw = false;
						this.selectedDeposit = false;
						break;
				}
			},
		}
	}
</script>