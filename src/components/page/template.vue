<template>
  <div id="pagename" class="container">
    <div class="pagetitle"><i class="icon-iconname theme"></i>제목</div>
    <Card
    v-for="card in cards"
    :cardid="card"
    :key="card"
    />
  </div>
<!-- pagetitle, Pagetitle, iconname, 제목을 바꾸세요-->
</template>

<script>
import Card from '@/components/page/card/card'

export default {
  name: 'Pagename',
  created () {},
  data () { return {} },
  computed: {
    cards () {
      return this.$store.state.pages.pagename
    }
  },
  components: { Card },
  methods: {}
}
</script>

<style scoped>
.pagetitle{
  font-size: 3rem;
  margin: 0.5rem 0rem 1.5rem 1rem;
}
.pagetitle i{
  font-size: 3.3rem;
}
</style>
