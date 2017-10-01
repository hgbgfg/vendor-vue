export default {
	getUrlKey: function(name){ // 获取history模式下的参数值
		return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
	}
}