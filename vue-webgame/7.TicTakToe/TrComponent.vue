<template>
  <table>
    <td-component v-for="(cellData, index) in rowData" :cell-data="cellData"
                  :cell-index="index" :row-index="rowIndex"></td-component>
  </table>
</template>

<script>

import TdComponent from "./TdComponent.vue";

export default {
  components: {
    TdComponent,
  },
  props: {
    rowData: Array,
    rowIndex: Number,
  }
}
</script>