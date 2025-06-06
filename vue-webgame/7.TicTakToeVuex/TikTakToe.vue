<template>
  <div>
    <div>{{ turn }}'s turn</div>
    <table-component></table-component>
    <div v-if="winner">{{ winner }} is winner</div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import store from './store';
import TableComponent from "./TableComponent.vue";

export default {
  store,
  components: {
    TableComponent
  },
  data() {
    return {
      data: 1
    }
  },
  computed: {
    ...mapState(['winner', 'turn']),
    ...mapState({
      winner(state) {
        return state.winner + this.data;
      },
      turnState: 'turn'
    })
    // winner() {
    //   return this.$store.state.winner;
    // },
    // turn() {
    //   return this.$store.state.turn;
    // }
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