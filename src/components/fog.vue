<template>
  <div id="fog" :class="{open: $store.state.sidebarOpened, invisible: $store.state.fogInvisible}" @click="$store.commit('sidebarClose')">
  </div>
</template>

<script>
export default {
  name: 'Fog',
  created () {},
  data () { return {} },
  computed: {},
  components: {},
  methods: {}
}
</script>

<style scoped>
#fog{
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  display: block;
  background-color: #000000;
  opacity: 0;
  transition: opacity 0.2s;
}
#fog.open {
  z-index: 1;
  display: block;
  opacity: 0.5;
}
#fog.invisible{
  z-index: -1;
}
</style>
