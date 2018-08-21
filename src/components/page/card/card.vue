<template>
  <div class="card">
    <Block
    v-for="block in card"
    :blockid="block"
    :key="block"
    />
  </div>
</template>

<script>
import Block from '@/components/page/card/block'
export default {
  name: 'Card',
  created () {},
  props: [ 'cardid' ],
  data () { return {} },
  computed: {
    card () {
      return this.$store.state.cards[this.cardid]
    }
  },
  components: { Block },
  methods: {}
}
</script>

<style scoped>
.card {
  background-color: var(--inner);
  margin-bottom: 1.5rem;
  padding: 0 0 0 0;
  border: 2px solid var(--border);
  border-radius: 16px;
}
</style>
