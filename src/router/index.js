import Vue from 'vue'
import Router from 'vue-router'
import loginRegister from '@/components/loginRegister'
import login from '@/components/login'
import forgotPassword from '@/components/forgotPassword'
import setPassword from '@/components/setPassword'
import vipiao from '@/components/vipiao'
import myWallet from '@/components/myWallet'
import notice from '@/components/notice'
import withDraw from '@/components/withDraw'
import withdrawRule from '@/components/withdrawRule'
import changeDetail from '@/components/changeDetail'
import changeDetail_income from '@/components/changeDetail_income'
import changeDetail_draw from '@/components/changeDetail_draw'
import changeDetail_deposit from '@/components/changeDetail_deposit'
import grabVotes from '@/components/grabVotes'
import manageOrder from '@/components/manageOrder'
import distribution from '@/components/distribution'
import bindCard from "@/components/bindCard"

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'loginRegister',
        component: loginRegister
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/forgotPassword',
        name: 'forgotPassword',
        component: forgotPassword
    },
    {
        path: '/setPassword',
        name: 'setPassword',
        component: setPassword
    },
    {
        path: '/vipiao',
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
    },
    {
        path: '/withdrawRule',
        name: 'withdrawRule',
        component: withdrawRule
    },
    {
        path: '/changeDetail',
        name: 'changeDetail',
        component: changeDetail,
        children: [
            {
                path: '',
                name: 'changeDetail_income',
                component: changeDetail_income
            },
            {
                path: 'changeDetail_income',
                name: 'changeDetail_income',
                component: changeDetail_income
            },
            {
                path: 'changeDetail_draw',
                name: 'changeDetail_draw',
                component: changeDetail_draw
            },
            {
                path: 'changeDetail_deposit',
                name: 'changeDetail_deposit',
                component: changeDetail_deposit
            }
        ]
    },
    {
        path: '/grabVotes',
        name: 'grabVote',
        component: grabVotes
    },
    {
        path: '/manageOrder/:id',
        name: 'manageOrder',
        component: manageOrder
    },
    {
        path: '/distribution',
        name: 'distribution',
        component: distribution
    },
    {
        path: '/bindCard',
        name: 'bindCard',
        component: bindCard
    }
  ]
})
