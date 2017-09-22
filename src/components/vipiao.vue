<template>
    <!-- 内容主体区域 -->
    <div class="vipiao">
      <!-- <app-footer></app-footer> -->
      <x-header class="topNav">
        <span class="title">唯票卖家版</span>
        <img src="../assets/image/ic_nav_setting@2x.png" slot="overwrite-left" class="setting">
        <img src="../assets/image/ic_nav_notice@2x.png" slot="right" class="message">
      </x-header>
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
        <p>我的订单<img src="../assets/image/ic_arrow_right@2x.png"></p>
        <ul>
          <li>
            <p><img src="../assets/image/ic_hom_order_waitsend@2x.png">待发货</p>
            <p>3</p>
          </li>
          <li>
            <p><img src="../assets/image/ic_hom_order_waitsure@2x.png">待确认</p>
            <p>14</p>
          </li>
          <li>
            <p><img src="../assets/image/ic_hom_order_finish@2x.png">交易完成</p>
            <p>263</p>
          </li>
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

<style>
  @import '../../static/css/index.css'
</style>

<script>
  import XHeader from 'vux/src/components/x-header'
  import Actionsheet from 'vux/src/components/actionsheet'
  import AppFooter from './footer'

	export default {
	  name: 'vipiao',
	  data () {
	    return {
        
	    }
	  },
    components: {
      AppFooter,
      XHeader,
      Actionsheet
    },
    methods: {

    }
	}
</script>