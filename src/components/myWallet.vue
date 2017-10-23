<template>
	<div class="myWallet">
		<div class="top">
			<p class="topTitle myWalletTopTitle">
				<router-link to="/vipiao"><img src="../assets/image/ic_nav_backarrow.png"></router-link>
				我的钱包<router-link to="/notice" class="rightNotice">说明</router-link>
			</p>
			<div class="canWithdraw">
				<img src="../assets/image/wallet1.png">
				<ul>
					<li>
						可提现金额
						<router-link to="/withDraw"><img src="../assets/image/ic_nav_cutphoto_backarrow@2x.png"></router-link>
					</li>
					<li>￥<span> 87692.00</span></li>
				</ul>
			</div>
		</div>
		<div class="middle"></div>
		<div class="bottom">
			<ul>
				<li>
					<router-link to="/vipiao"><p>可用余额<img src="../assets/image/ic_nav_nextarrow@2x.png"><span>￥99999.00 </span></p></router-link>
				</li>
				<li>
					<router-link to="/changeDetail">收支明细<img src="../assets/image/ic_nav_nextarrow@2x.png"></router-link>
				</li>
			</ul>
			<div class="middle"></div>
			<p>
				<router-link to="/bindCard">
					我的银行卡
					<img src="../assets/image/ic_nav_nextarrow@2x.png">
					<span>{{isBind}}</span>
				</router-link>
			</p>
		</div>
	</div>
</template>

<style scoped>
	@import '../../static/css/myWallet.css'
</style>

<script>
	export default {
		name: 'myWallet',
		data(){
			return {
				isBind: '未绑定'
			}
		},
		components: {
			
		},
		mounted: function(){
			if (!localStorage.getItem("_vt")) {
				location.hash = "/";
				return;
			}
			localStorage.setItem("selectedIncome", true);
			localStorage.setItem("selectedDraw", false);
			localStorage.setItem("selectedDeposit", false);

			this.getUserData();
		},
		methods: {
			getUserData: function(){
				var data = {
					_vt: localStorage.getItem("_vt")
				};
				this.$http.post("/api/v3/user/user-data", data, { emulateJSON: true })
				.then(function(res){
					console.log(res);
					if (res.body.status_code==200) {
						if (res.body.data.user) {}
					}else{
						alert(res.body.message);
					}
				}, function(error){
					console.log(error);
				})
			}
		}
	}
</script>