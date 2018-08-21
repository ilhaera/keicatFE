<template>
  <table id="timetable">
    <tr v-for="(row, rowindex) in table" :key="rowindex">
      <td v-for="(cell, cellindex) in row" :key="cellindex">
        {{ cell }}
      </td>
    </tr>
  </table>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Timetable',
  created () {},
  data () { return {} },
  computed: {
    table () {
      const cls = this.$store.state.select.class.value
      const ban = this.$store.state.select.ban.value
      return this.$store.state.timetable[cls-1][ban-1]
    }
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
table{
    text-align: center;
    width: 100%;
    background-color: #ffffff;
    padding: 0 0 0 0;
    border: 2px solid #DFDFDF;
    border-radius: 16px;
    border-collapse: collapse;
    text-align: center;
    vertical-align: middle;
    table-layout: fixed;
    font-size: 1.5rem;
}
td{
  width : 10%;
  border-left: 1px solid var(--border);
  border-top: 1px solid var(--border);
  height: 5.9rem;
  white-space:normal;
  word-break:keep-all;
}
table tr:first-child>td{
  border-left: 1px solid var(--border);
  text-align: center;
  vertical-align: middle;
  height: 5rem;
  font-size: 1.7rem;
}
table td:first-child{
  font-size: 1.7rem;
}
</style>
