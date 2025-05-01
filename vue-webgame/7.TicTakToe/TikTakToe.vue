<template>
  <table-component :table-data="tableData"></table-component>
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
      ]
    }
  },
  methods: {}
}
</script>

<style scoped></style>