<template>
  <select class="dropdown" v-model="localValue" @change="change">
    <option v-for="item in option" :key="item" :value="item">{{ item }}</option>
  </select>
</template>

<script>
export default {
  name: 'Dropdown',
  created () {},
  props: [ 'selectid' ],
  data () {
    return {
      localValue: 1
    }
  },
  computed: {
    value () {
      return this.$store.state.select[this.selectid].value
    },
    option () {
      return this.$store.state.select[this.selectid].option
    }
  },
  components: {},
  methods: {
    change () {
      this.$store.commit('dropdownPush', {
        id: this.selectid,
        value: this.localValue
      })
    }
  }
}
</script>

<style scoped>
select {
  color: var(--theme);
  width: 7rem;
  padding: 0.3rem 1rem 0.3rem 0.4rem;
  border: 2px solid var(--border);
  border-radius: 6px;
  display: inline-block;
  font-size: 3rem;
  line-height: 1;
  background: url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #fff;
  -webkit-appearance: none;
  background-position-x: 4.5rem;
  margin-bottom: 1.8rem;
  margin-left: 0.3rem;
}
select::-ms-expand {
  display: none;
}
</style>
