import Vue from 'vue'
import Router from 'vue-router'
import vipiao from '@/components/vipiao'
import personalInfo from '@/components/personalInfo'
import programs from '@/components/programs'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'vipiao',
        component: vipiao
    },
    {
    	path: '/personalInfo',
    	name: 'personalInfo',
    	component: personalInfo
    },
    {
    	path: '/programs',
    	name: 'programs',
    	component: programs
    }
  ]
})
