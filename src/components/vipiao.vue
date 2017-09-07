<template>
    <!-- 内容主体区域 -->
    <div class="vipiao">   	
		<ul class="layui-tab-title" id="admin-tab">
	        <li class="layui-this">
	            <i class="layui-icon" style="top: 2px; font-size: 16px;"></i>
	            <cite>后台管理</cite>
	        </li>
	    </ul>
	    <div style="padding: 20px;">
	        <div style="padding: 10px; border: solid 1px #eee;">        
		        <section class="index_top">
		          <div>          
		            <img src="static/images/header.png" class="index_top_headerImg">
		            <ul>
		              <li>小唯&nbsp;13788888888</li>
		              <li><img src="static/images/official.png" class="index_top_official">官方认证</li>
		            </ul>
		            <a href=""><button class="layui-btn layui-btn-danger layui-btn-big index_top_btn">我要发布票源</button></a>
		          </div>
		          <p>
		            账户余额：<span class="index_top_balance">￥1959.00</span>
		            <span class="layui-breadcrumb index_top_changeInfo" lay-separator="|">
		              <a href="">提现</a>
		              <a href="">收支明细</a>
		            </span>
		          </p>
		        </section>
		        <div class="blank30"></div>
		        <section class="index_bottom">
		            <p class="index_bottom_title">数据看板</p>
		            <ul class="index_bottom_content">
			            <li>
			                <p>累计销售金额：
			                <h3>￥3019.62</h3>
			            </li>
			            <li>
			                <p>可体现金额：</p>
			                <h3>￥2959.01</h3>
			            </li>
			            <li>
			                <p>累计上传票源：</p>
			                <h3>61</h3>
			            </li>
			            <li>
			                <p>待确认订单：</p>
			                <h3>0</h3>
			            </li>
			            <li>
			                <p>待发货订单：</p>
			                <h3>101</h3>
			            </li>
			            <li>
			                <p>已完成订单：</p>
			                <h3>153</h3>
			            </li>
		            </ul>
		            <div class="blank30"></div>
		        </section>
	        </div>
	    </div>
    </div>
</template>

<script>
	export default {
	  name: 'vipiao',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  }
	}
</script>