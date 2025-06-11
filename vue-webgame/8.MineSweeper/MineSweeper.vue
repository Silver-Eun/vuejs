<template>
  <div>
    <mine-form/>
    <div>{{ timer }}</div>
    <table-component/>
    <div>{{ result }}</div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import store, {INCREMENT_TIMER} from './store';
import TableComponent from "./TableComponent.vue";
import MineForm from "./MineForm.vue";

let interval;
export default {
  store,
  components: {
    TableComponent,
    MineForm
  },
  computed: {
    ...mapState(['timer', 'result', 'halted'])
  },
  methods: {},
  watch: {
    halted(value, oldValue) {
      if (value === false) { // 게임 시작
        interval = setInterval(() => {
          this.$store.commit(INCREMENT_TIMER);
        }, 1000)
      } else { // 게임 중단
        clearInterval(interval);
      }
    }
  }
}
</script>

<style>
table {
  border-collapse: collapse;
}

td {
  border: 1px solid black;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
</style>