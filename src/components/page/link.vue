<template>
  <div id="link" class="container">
    <div class="pagetitle"><i class="icon-link theme"></i>링크</div>
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
  name: 'Link',
  created () {},
  data () { return {} },
  computed: {
    cards () {
      return this.$store.state.pages.link
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
