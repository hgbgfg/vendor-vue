<template>
    <!-- 内容主体区域 -->
    <div class="vipiao">
      <div class="topNav">
        <router-link to="/personalInfo"><img src="../assets/image/ic_nav_setting@2x.png" class="setting"></router-link>
        <span class="title">唯票卖家版</span>
        <router-link to="/noticeCenter"><img src="../assets/image/ic_nav_notice@2x.png" class="message"></router-link>
      </div>
      <div class="userInfo">
        <span class="userHeader"><img src="../../static/images/header.png"></span>
        <ul>
          <li>黄牛不是牛黄牛不是牛</li>
          <li><img src="../assets/image/ic_hom_certified@2x.png" />认证卖家</li>
        </ul>
      </div>
      <ul class="changeInfo">
        <li>
          <p>接单数量</p>
          <p>288</p>
        </li>
        <li>
          <p><router-link to="/myWallet">钱包余额</router-link></p>
          <p><router-link to="/myWallet">13000.50</router-link></p>
        </li>
        <li><img src="../assets/image/ic_hom_setpreference@2x.png">抢单偏好</li>
      </ul>
      <div class="notice">
        <div>          
          <p><img src="../assets/image/ic_notice@2x.png"></p>
          <p>周杰伦 [地表最强.上海场] 火热预定开启，快来抢单吧</p>
          <p>立即查看</p>
        </div>
      </div>
      <div class="myOrder">
        <router-link to="/manageOrder/1"><p>我的订单<img src="../assets/image/ic_arrow_right@2x.png"></p></router-link>
        <ul>
          <router-link to="/manageOrder/1"><li>
            <p><img src="../assets/image/ic_hom_order_waitsend@2x.png">待发货</p>
            <p>3</p>
          </li></router-link>
          <router-link to="/manageOrder/2"><li>
            <p><img src="../assets/image/ic_hom_order_waitsure@2x.png">待确认</p>
            <p>14</p>
          </li></router-link>
          <router-link to="/manageOrder/3"><li>
            <p><img src="../assets/image/ic_hom_order_finish@2x.png">交易完成</p>
            <p>263</p>
          </li></router-link>
        </ul>
      </div>
      <div class="notOpen">
        <p>票品管理<span>敬请期待...</span></p>
        <ul>
          <li>
            <p><img src="../assets/image/ic_hom_goods_selling@2x.png">出售中</p>
            <p>0</p>
          </li>
          <li>
            <p><img src="../assets/image/ic_hom_goods_waitadd@2x.png">待上架</p>
            <p>0</p>
          </li>
          <li>
            <p><img src="../assets/image/ic_hom_goods_soldout@2x.png">已下架</p>
            <p>0</p>
          </li>
        </ul>
      </div>
      <p class="grabVotes">
        <router-link to="/grabVotes"><span>抢单</span></router-link>
        <img src="../assets/image/bubble_hom_btn_new@2x.png">
      </p>
    </div>
</template>

<style scoped>
  @import '../../static/css/index.css'
</style>

<script>
  import XHeader from 'vux/src/components/x-header'
  import Actionsheet from 'vux/src/components/actionsheet'

	export default {
	  name: 'vipiao',
	  data () {
	    return {
        msg: "hello world"
	    }
	  },
    components: {
      XHeader,
      Actionsheet
    },
    methods: {

    },
    mounted(){
      this.$store.state.fromPage = "index";
    }
	}
</script>