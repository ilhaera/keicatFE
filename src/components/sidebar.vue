<template>
  <div id="sidebar" :class="{open: $store.state.sidebarOpened}">
    <div class="wrap">
      <router-link to="/main"><div class="title item clickable" @click="$store.commit('sidebarClose')"><img class="school" src="@/assets/images/logo.png" alt="logo">{{ config.appname }}</div></router-link>
      <hr class="large">
      <router-link to="/notice"><div class="item clickable" @click="$store.commit('sidebarClose')"><i class="icon icon-megaphone"></i>공지사항</div></router-link>
      <hr>
      <router-link to="/meal"><div class="item clickable" @click="$store.commit('sidebarClose')"><i class="icon icon-food"></i>급식</div></router-link>
      <hr>
      <router-link to="/schedule"><div class="item clickable" @click="$store.commit('sidebarClose')"><i class="icon icon-table"></i>시간표</div></router-link>
      <hr>
      <router-link to="/calendar"><div class="item clickable" @click="$store.commit('sidebarClose')"><i class="icon icon-calendar"></i>일정</div></router-link>
      <hr>
      <router-link to="/link"><div class="item clickable" @click="$store.commit('sidebarClose')"><i class="icon icon-link"></i>링크</div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  created () {},
  data () { return {} },
  computed: {
    config () { return this.$store.state.config }
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
.wrap{
  margin: 0;
  padding: 3.5rem 1rem;
}
#sidebar{
  padding: 0;
  height: 100%;
  width: 70%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: -70%;
  background-color: var(--inner);
  transition: 0.5s;
  font-size: 1.5rem;
}
#sidebar.open{
  left: 0%;
}
#header {
  margin-bottom: 2.5rem;
}
.item {
  display: block;
  transition: 0.2s;
  font-size: 2rem;
  margin-left: 2rem;
}
.title{
  font-size: 2.5rem;
  margin-left: 2rem;
  margin-bottom: 1rem;
}
.school{
  vertical-align: middle;
  margin-right: 1.5rem;
  width: 3.5rem;
  height: 3.5rem;
}
.icon{
  vertical-align: middle;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2.3rem;
  color: var(--theme);
  margin-right: 2rem;
}

hr{
  width: 50%;
  margin-left: 2.5rem;
  margin-right: auto;
}
hr.large{
  width: 70%;
  margin-bottom: 4rem;
}
</style>
