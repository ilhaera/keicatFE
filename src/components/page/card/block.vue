<template>
  <div class="block" :class="block.type" @click="click">
    <template v-if="block.type=='title-html'">
      <div class="text" v-html="block.html"></div>
    </template>
    <template v-else-if="block.type=='title'">
      <div class="title">{{ block.title }}</div>
    </template>
    <template v-else-if="block.type=='post'">
      <div class="title">{{ block.title }}</div>
      <div class="summary">{{ block.summary }}</div>
    </template>
    <template v-else-if="block.type=='link'">
      <i class="icon-link"></i><div class="text">{{ block.text }}</div>
    </template>
    <template v-else-if="block.type=='plain'">
      <div class="text">{{ block.text }}</div>
    </template>
    <template v-else-if="block.type=='strong'">
      <div class="text">{{ block.text }}</div>
    </template>
    <template v-else-if="block.type=='list'">
      <div class="list" v-for="item in block.list" :key="block.list.indexOf(item)">{{ item }}</div>
    </template>
    <template v-else-if="block.type=='d-day'">
      <div class="d-day">D-{{ dday(block.date) }}</div>
      <div class="date">
        <div>{{ block.date[1] }}/{{ block.date[2] }}</div>
        <div>{{ block.title }}</div>
      </div>
    </template>
    <template v-else-if="block.type=='html'">
      <span v-html="block.html"></span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Block',
  created () {},
  props: [ 'blockid' ],
  data () { return {} },
  computed: {
    block () {
      return this.$store.state.blocks[this.blockid]
    }
  },
  components: {},
  methods: {
    click () {
      if (this.block.link) {
        if (this.block.link.indexOf('http') === -1) {
          this.$router.push(this.block.link)
        } else {
          window.open(this.block.link, '_blank')
        }
      }
    },
    dday (date) {
      const now = new Date()
      const then = new Date(date[0], date[1] - 1, date[2])
      let gap = then.getTime() - now.getTime()
      gap = Math.floor(gap / (1000 * 60 * 60 * 24)) + 1
      if (gap === 0) gap = 'day'
      return gap
    }
  }
}
</script>

<style scoped>
.block {
  font-size: 1.7rem;
  padding: 1.5rem 2rem;
  margin: 0 0 0 0;
  border-top: 1px solid var(--border);
}
.block:first-child{
  border: none;
}
.block.title-html {
  padding: 1.5rem;
  font-size: 2.5rem;
}
.block.title{
  font-size: 2.5rem;
}
.block.title i{
  font-size: 2.8rem;
  margin-right: 1rem;
}
.block.list{
  padding: 0;
}
.block.list .list{
  margin: 0;
  padding: 0.5rem;
  border-top: 1px solid var(--border);
}
.block.list .list:first-child{
  border: none;
}
.block.list .list::before {
  content: "•";
  font-size: 1.8rem;
  color: var(--theme);
  margin: 0 1.5rem 0 0.5rem;
  padding: 0 0 0 0;
}
.block.link>.text{
  display: inline;
}
.block.link>i{
  font-size: 2rem;
}
.block.plain>.text {

}
.block.strong>.text {
  font-weight: bold;
  font-size: 2rem;
}
.block.post>.title {
  font-size: 2.2rem;
  line-height: 3.5rem;
}
.block.post>.summary {
  font-size: 1.7rem;
  line-height: 3rem;
}
.block.d-day .d-day{
  display: inline-block;
  margin-left: 0.5rem;
  color: var(--theme);
  font-size: 4.5rem;
}
.block.d-day .date{
  float: right;
  font-size: 2.3rem;
  text-align: right;
}
</style>
<style>
.block.title-html i{
  font-size: 2.8rem;
  margin-right: 1rem;
  /*Global Scoped인 이유는 v-html로 렌더링했을 경우 뷰가 처리하지 못하기 때문임.*/
}
</style>
