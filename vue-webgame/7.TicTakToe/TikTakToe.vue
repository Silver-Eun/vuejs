<template>
  <div>
    <div>{{ turn }}'s turn</div>
    <table-component :table-data="tableData"></table-component>
    <div v-if="winner">{{ winner }} is winner</div>
  </div>
</template>

<script>
import Vue from "vue";
import TableComponent from "./TableComponent.vue";

export default {
  components: {
    TableComponent
  },
  data() {
    return {
      tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      turn: 'O',
      winner: '',
    }
  },
  methods: {
    onChangeData() {
      Vue.set(this.tableData[1], 0, 'X');
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