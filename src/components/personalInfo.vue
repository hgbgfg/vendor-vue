<template>
	<div class="personalInfo">
		<p class="personalInfo_nav">      
	        <span class="layui-breadcrumb">
		        <a href="#">首页</a>>
		        <a href="#personalInfo">系统管理</a>>
		        <a><cite>个人资料</cite></a>
	        </span>
	    </p>
		<form class="layui-form personalInfo_form" action="">
	        <div class="layui-form-item">
	            <label class="layui-form-label">姓名：</label>
	            <div class="layui-form-mid layui-word-aux">小唯</div>
	        </div>
	        <div class="layui-form-item">
	            <label class="layui-form-label">邮箱：</label>
	            <div class="layui-form-mid layui-word-aux">辅助文字</div>
	        </div>
	        <div class="layui-form-item">
	            <label class="layui-form-label">地址：</label>
	            <div class="layui-form-mid layui-word-aux"></div>
	        </div>
	        <div class="layui-form-item">
	            <label class="layui-form-label">手机号：</label>
	            <div class="layui-form-mid layui-word-aux"></div>
	        </div>
	        <div class="layui-form-item">
	            <label class="layui-form-label">身份证：</label>
	            <div class="layui-form-mid layui-word-aux"></div>
	        </div>
	        <div class="layui-form-item">
	            <label class="layui-form-label">是否官方：</label>
	            <div class="layui-form-mid layui-word-aux">是</div>
	        </div>
	        <div class="layui-form-item">
	            <label class="layui-form-label">真是姓名：</label>
	            <div class="layui-form-mid layui-word-aux">唯票</div>
	        </div>
	        <div class="layui-form-item">
	            <label class="layui-form-label">公司名称：</label>
	            <div class="layui-form-mid layui-word-aux">超级唯票</div>
	        </div>
	        <div class="layui-form-item">
	            <label class="layui-form-label">公司简称：</label>
	            <div class="layui-form-mid layui-word-aux">唯票网</div>
	        </div>
	        <div class="layui-form-item">
	            <label class="layui-form-label">运营人员备注：</label>
	            <div class="layui-form-mid layui-word-aux"></div>
	        </div>
        </form>
	</div>
</template>

<script>
	export default {
		name: "personalInfo",
		data () {
			return {
				message: ""
			}
		}
	}
</script>

<style type="text/css">
	
</style>