import Vue from 'vue'
import Router from 'vue-router'
import vipiao from '@/components/vipiao'
import myWallet from '@/components/myWallet'
import notice from '@/components/notice'
import withDraw from '@/components/withDraw'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'vipiao',
        component: vipiao
    },
    {
    	path: '/myWallet',
    	name: 'myWallet',
    	component: myWallet
    },
    {
    	path: '/notice',
    	name: 'notice',
    	component: notice
    },
    {
        path: '/withDraw',
        name: 'withDraw',
        component: withDraw
    }
  ]
})
