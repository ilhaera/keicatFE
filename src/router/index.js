import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/page/main'
import Notice from '@/components/page/notice'
import Meal from '@/components/page/meal'
import Schedule from '@/components/page/schedule'
import Calendar from '@/components/page/calendar'
import Verify from '@/components/page/verify'
import Link from '@/components/page/link'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/meal',
      name: 'Meal',
      component: Meal
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/verify',
      name: 'Verify',
      component: Verify
    },
    {
      path: '/link',
      name: 'Link',
      component: Link
    }
  ]
})
