import Vue from 'vue'
import Vuex from 'vuex'
import config from './assets/config.js'
Vue.use(Vuex)
const classes = []
const bans = []
for (let i = 1; i <= config.classes[0]; i++) {
  classes.push(i)
}
for (let i = 1; i <= config.classes[1]; i++) {
  bans.push(i)
}
export const store = new Vuex.Store({
  state: {
    config: config,
    select: {
      class: {
        value: 1,
        option: classes
      },
      ban: {
        value: 1,
        option: bans
      }
    },
    timetable: [],
    sidebarOpened: false,
    fogInvisible: true,
    pages: {
      'main': [0, 1, 2],
      'notice': [],
      'meal': [],
      'link': [],
      'calendar': []
    },
    'cards': [
      [0, 4, 1],
      [2, 4],
      [3, 4]
    ],
    blocks: [
      {
        'type': 'title-html',
        'html': '<i class=\'icon-megaphone theme\'></i>공지사항',
        'link': '/notice'
      },
      {
        'type': 'link',
        'text': '공지사항 전체 보기',
        'link': '/notice'
      },
      {
        'type': 'title-html',
        'html': '<i class=\'icon-food theme\'></i>오늘의 급식은?',
        'link': '/meal'
      },
      {
        'type': 'title-html',
        'html': '<i class=\'icon-calendar theme\'></i>놓치면 안되는 일정',
        'link': '/calendar'
      },
      {
        'type': 'plain',
        'text': '불러오는 중...'
      },
      {
        'type': 'plain',
        'text': '불러올 수 없습니다.'
      }
    ]
  },
  mutations: {
    sidebarOpen (state) {
      state.sidebarOpened = true
      state.fogInvisible = false
    },
    sidebarClose (state) {
      state.sidebarOpened = false
      setTimeout(() => { state.fogInvisible = true }, 200)
    },
    dropdownPush (state, payload) {
      state.select[payload.id].value = payload.value
    },
    ajaxSet (state, payload) {
      state[payload.key] = payload.value
    },
    tableStorage (state) {
      state.select.class.value = localStorage.selectClass ? localStorage.selectClass : 1
      state.select.ban.value = localStorage.selectBan ? localStorage.selectBan : 1
    }
  },
  getters: {

  }
})
