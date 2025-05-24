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
import EventBus from "./EventBus.js";

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
    },
    onClickTd(rowIndex, cellIndex) {
      this.$set(this.tableData.tableData[rowIndex], cellIndex, this.tableData.turn);

      let win = false;
      if (this.tableData.tableData[rowIndex][0] === this.tableData.turn
          && this.tableData.tableData[rowIndex][1] === this.tableData.turn
          && this.tableData.tableData[rowIndex][2] === this.tableData.turn) {
        win = true
      }
      if (this.tableData.tableData[0][rowIndex] === this.tableData.turn
          && this.tableData.tableData[1][rowIndex] === this.tableData.turn
          && this.tableData.tableData[2][rowIndex] === this.tableData.turn) {
        win = true
      }
      if (this.tableData.tableData[0][0] === this.tableData.turn
          && this.tableData.tableData[1][1] === this.tableData.turn
          && this.tableData.tableData[2][2] === this.tableData.turn) {
        win = true
      }
      if (this.tableData.tableData[0][2] === this.tableData.turn
          && this.tableData.tableData[1][1] === this.tableData.turn
          && this.tableData.tableData[2][0] === this.tableData.turn) {
        win = true
      }

      if (win) { // win
        this.tableData.winner = this.tableData.turn;
        this.tableData.turn = 'O';
        this.tableData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
      } else { // draw
        let all = true;
        this.tableData.tableData.forEach((row) => {
          row.forEach((cell) => {
            if (!cell) {
              all = false;
            }
          })
        })
        if (all) { // draw
          this.tableData.winner = this.tableData.turn;
          this.tableData.turn = 'O';
          this.tableData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
        } else {
          this.tableData.turn = this.tableData.turn === 'O' ? 'X' : 'O';
        }
      }
    }
  },
  created() {
    EventBus.$on("clickTd", this.onClickTd);
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