import Vue from 'vue'
import Router from 'vue-router'
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
        path: '/manageOrder',
        name: 'manageOrder',
        component: manageOrder
    },
    {
        path: '/distribution',
        name: 'distribution',
        component: distribution
    }
  ]
})
