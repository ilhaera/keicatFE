<template>
  <div id="main" class="container">
    <div class="title"><img src="@/assets/images/logo.png" alt="logo">{{ config.schoolname }}</div>
    <Card
    v-for="card in cards"
    :cardid="card"
    :key="card"
    />
  </div>
</template>

<script>
import Card from '@/components/page/card/card'

export default {
  name: 'Main',
  created () {},
  data () { return {} },
  computed: {
    cards () {
      return this.$store.state.pages.main
    },
    config () { return this.$store.state.config }
  },
  components: { Card },
  methods: {}
}
</script>

<style scoped>
#main>.title {
    font-size: 3.3rem;
    margin-left: 1rem;
    margin-bottom: 1.5rem;
    margin-top: 0;
}
#main>.title>img {
    margin-right: 1rem;
    vertical-align: middle;
    width: 4rem;
    height: 4rem;
}
</style>
