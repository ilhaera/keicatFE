<template>
  <div id="app" v-cloak>
    <Sidebar :isopen="false"/>
    <div id="header">
      <img id="menu" src="@/assets/images/menu.png" @click="$store.commit('sidebarOpen')"><input id="search" type="text" placeholder="검색하세요.">
    </div>
    <Fog />
    <router-view/>
    <div id="footer">
      <p>{{ config.appname }} 2018 All right reserved</p>
      <p>{{ config.admin }}</p>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar'
import Fog from '@/components/fog'
import ajax from '@/assets/js/ajax.js'
export default {
  name: 'App',
  created () {
    ajax('view').then((data) => {})
    ajax('card').then((data) => {
      const ajaxData = JSON.parse(data)
      this.$store.commit('ajaxSet', {
        key: 'pages',
        value: ajaxData.pages
      })
      this.$store.commit('ajaxSet', {
        key: 'cards',
        value: ajaxData.cards
      })
      this.$store.commit('ajaxSet', {
        key: 'blocks',
        value: ajaxData.blocks
      })
    })
    ajax('timetable').then((data) => {
      const ajaxData = JSON.parse(data)
      this.$store.commit('ajaxSet', {
        key: 'timetable',
        value: ajaxData
      })
    })
    this.$store.commit('tableStorage')
  },
  data () { return {} },
  computed: {
    config () { return this.$store.state.config }
  },
  components: {Sidebar, Fog},
  methods: {}
}
</script>

<style>
@import './assets/fontello/css/keicat.css';
@import './assets/fontello/css/animation.css';
@import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css");
:root{
  --theme: #FF0000;
  --inner: #FFFFFF;
  --border: #DFDFDF;
  --background: #F5F5F5;
  --disabled: #aaa;
  --body: #333;
  color: var(--body);
}
[v-cloak]{
  display: none;
}
#app{
  background-color: var(--background);
  padding: 1.5rem 0.8rem 1.5rem 0.8rem;
}
html{
  font-size: 10px;
  background-color: var(--background);
}
body{
  font-family: 'NanumSquareRound',sans-serif;
  font-size: 1.3rem;
}
html,body,#app,.container{
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}
.container{
  background-color: #F5F5F5;
  padding: 1.5rem 0.8rem 1.5rem 0.8rem;
}
a, .clickable{
  color: inherit;
  text-decoration: none;
  transition: color .5s ease;
}
a:link{
  color: inherit;
  text-decoration: none;
}
a:visited{
  color: inherit;
  text-decoration: none;
}
a:hover, .clickable:hover{
  color: inherit;
  text-decoration: none;
}
a:active{
  color: inherit;
  text-decoration: none;
}
a.disabled{
  color: var(--disabled);
}
i{
  vertical-align: middle;
  margin-right: 1.5rem;
}
.theme{
  color: var(--theme);
}
</style>
<style scoped>
#menu{
  width: 3rem;
  height: 3rem;
  margin: 0 .5rem;
  display: inline;
}
#search {
  display: inline;
  background-color: #FAFAFA;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: .5rem;
  margin: 0 1rem;
  width: calc(100% - 6rem);
}
#header {
  display: inline-block;
  padding: 1.2rem 1rem;
  background-color: var(--inner);
  border-bottom: 1px solid var(--border);
  width: 100%;
}
#footer{
  text-align: center;
  color: #C5C5C5;
  margin: 0 0 3rem;
}
</style>
