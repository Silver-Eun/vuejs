<template>
  <div>
    <table-component :table-data="tableData"></table-component>
    <div>{{ turn }}'s turn</div>
  </div>
</template>

<script>
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
      turn: 'O'
    }
  },
  methods: {}
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
}
</style>