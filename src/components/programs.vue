<template>
	<div class="programs">
		<p class="personalInfo_nav">      
	        <span class="layui-breadcrumb">
		        <a href="#">首页</a>>
		        <a href="#programs">节目管理</a>>
		        <a><cite>节目列表</cite></a>
	        </span>
	    </p>
	    <section class="content">
			<form class="layui-form personalInfo_form" action="">
		        <div class="layui-form-item">
		            <div class="layui-input-block">
				        <input type="text" name="title" required  lay-verify="required" placeholder="请输入节目名称" autocomplete="off" class="layui-input">
				        <button class="layui-btn">搜索</button>
				    </div>
		        </div>
	        </form>
	    	<table class="layui-table" lay-size="sm">
	    		<colgroup>
				    <col width="150">
				    <col width="200">
				    <col>
				</colgroup>
				<thead>
				    <tr>
				      <th>节目名称</th>
				      <th>节目分类</th>
				      <th>所有场次</th>
				      <th>操作</th>
				    </tr> 
				</thead>
				<tbody>
				    <tr>
				        <td>预售劵0815</td>
				        <td>体育赛事</td>
				        <td>北京市</td>
				        <td><a href="">查看场次</a></td>
				    </tr>
				    <tr>
				        <td>预售劵0724</td>
				        <td>体育赛事</td>
				        <td>北京市</td>
				        <td><a href="">查看场次</a></td>
				    </tr>
				    <tr>
				        <td>CS北京演唱会0707</td>
				        <td>休闲展览</td>
				        <td>北京市/哈尔滨市/长沙市/太原市/福州市/重庆市</td>
				        <td><a href="">查看场次</a></td>
				    </tr>
				    <tr>
				        <td>预售劵0815</td>
				        <td>体育赛事</td>
				        <td>北京市</td>
				        <td><a href="">查看场次</a></td>
				    </tr>
				    <tr>
				        <td>预售劵0724</td>
				        <td>体育赛事</td>
				        <td>北京市</td>
				        <td><a href="">查看场次</a></td>
				    </tr>
				    <tr>
				        <td>CS北京演唱会0707</td>
				        <td>休闲展览</td>
				        <td>北京市/哈尔滨市/长沙市/太原市/福州市/重庆市</td>
				        <td><a href="">查看场次</a></td>
				    </tr>
				    <tr>
				        <td>预售劵0815</td>
				        <td>体育赛事</td>
				        <td>北京市</td>
				        <td><a href="">查看场次</a></td>
				    </tr>
				    <tr>
				        <td>预售劵0724</td>
				        <td>体育赛事</td>
				        <td>北京市</td>
				        <td><a href="">查看场次</a></td>
				    </tr>
				    <tr>
				        <td>CS北京演唱会0707</td>
				        <td>休闲展览</td>
				        <td>北京市/哈尔滨市/长沙市/太原市/福州市/重庆市</td>
				        <td><a href="">查看场次</a></td>
				    </tr>
				    <tr>
				        <td>CS北京演唱会0707</td>
				        <td>休闲展览</td>
				        <td>北京市/哈尔滨市/长沙市/太原市/福州市/重庆市</td>
				        <td><a href="">查看场次</a></td>
				    </tr>
				</tbody>
	    	</table>
	    	<!-- 分页 -->
            <div class="page" id="page"></div>
	    </section>
	    <div class="blank30"></div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "programs",
		data () {
			return {
				massage: ""
			}
		},
		mounted: function(){
			var laypage = layui.laypage;
			laypage.render({
			    cont: document.getElementById("page"),//容器。值支持id名、原生dom对象，jquery对象。
	            pages: 3,//通过后台拿到的总页数
	            groups: 5, //连续显示分页数  
	            skip: true, //是否开启跳页 
	            curr: function(){ //通过url获取当前页，也可以同上（pages）方式获取
	                var page = location.search.match(/page=(\d+)/);
	                return page ? page[1] : 1;
	            }(), //当前页 
	            first: '首页', //若不显示，设置false即可  
	            last: '尾页', //若不显示，设置false即可  
	            prev: '<上一页', //若不显示，设置false即可  
	            next: '下一页>',
	            jump: function(e, first){
	                if (!first) {
	                    if(location.href.indexOf("?page")>0){
	                        location.href = location.href.split("?page")[0]+'?page='+e.curr;
	                    }else if(location.href.indexOf("?")>0){
	                        location.href = location.href.split("&page")[0]+'&page='+e.curr;
	                    }else{
	                        location.href = location.href+'?page='+e.curr;
	                    }
	                }
	            }
			 })
		}
	}
</script>

<style type="text/css">
	.programs{
		padding: 0 20px;
	}
	.personalInfo_nav{
		margin-left: 0!important;
		margin-right: 0!important;
	}
	.content{
		border: solid 1px #eee;
		padding: 10px;
	}
	.content form{
		margin: 40px 0;
	}
	.layui-input-block{
		margin-left: 0;
		text-align: center;
	}
	.layui-input{
		width: 50%;
		display: inline;
		vertical-align: middle;
		margin-right: 30px;
	}
</style>