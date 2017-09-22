<template>
	<div class="grabVotes">
		<div>
			<ul v-for="item in listData.programs" class="programList">
				<li>
					<div class="left"><img v-bind:src="item.portrait_id"></div>
					<div class="right"></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<style type="text/css">
	
</style>
<script>
	import Vue from 'vue'
	import VueResource from 'vue-resource'
	Vue.use(VueResource)
	export default {
		name: 'grabVotes',
		data(){
			return {
				page: 1,
				page_size: 10,
				web: 123,
				listData: ''
			}
		},
		created(){
			var data = "page="+this.page+"&page_size="+this.page_size+"&web="+this.web;
			this.getListData(data);
		},
		methods: {
			getListData: function(data){
				var that = this;
				this.$http.get("/api/v5/home/data?"+data).then(function(res){
					if (res.body.status_code==200) {
						console.log(res);
						that.listData = res.body.data.program_list;					
					}
				}, function(res){

				})
			}
		}
	}
</script>