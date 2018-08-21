<template>
  <div id="schedule" class="container">
    <div class="pagetitle"><i class="icon-table theme"></i>시간표</div>
    <Dropdown selectid="class"/>
    <Dropdown selectid="ban"/>
    <Timetable/>
  </div>
</template>

<script>
import Timetable from '@/components/page/card/timetable'
import Dropdown from '@/components/page/card/dropdown'
export default {
  name: 'Schedule',
  created () {},
  data () { return {} },
  computed: {
    cards () {
      return this.$store.state.pages.schedule
    }
  },
  components: { Dropdown, Timetable },
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
