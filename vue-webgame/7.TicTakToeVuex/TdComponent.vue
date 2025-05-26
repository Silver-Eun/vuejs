<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
import {CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER} from "./store";

export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd() {
      if (this.cellData) return;

      this.$store.commit(CLICK_CELL, {row: this.rowIndex, cell: this.cellIndex});

      let win = false;
      if (this.tableData[this.rowIndex][0] === this.tableData.turn
          && this.tableData[this.rowIndex][1] === this.tableData.turn
          && this.tableData[this.rowIndex][2] === this.tableData.turn) {
        win = true
      }
      if (this.tableData[0][this.rowIndex] === this.tableData.turn
          && this.tableData[1][this.rowIndex] === this.tableData.turn
          && this.tableData[2][this.rowIndex] === this.tableData.turn) {
        win = true
      }
      if (this.tableData[0][0] === this.tableData.turn
          && this.tableData[1][1] === this.tableData.turn
          && this.tableData[2][2] === this.tableData.turn) {
        win = true
      }
      if (this.tableData[0][2] === this.tableData.turn
          && this.tableData[1][1] === this.tableData.turn
          && this.tableData[2][0] === this.tableData.turn) {
        win = true
      }

      if (win) { // win
        this.$store.commit(SET_WINNER, this.turn);
        this.$store.commit(RESET_GAME);
      } else { // draw
        let all = true;
        this.tableData.forEach((row) => {
          row.forEach((cell) => {
            if (!cell) {
              all = false;
            }
          })
        })
        if (all) { // draw
          this.$store.commit(NO_WINNER);
          this.$store.commit(RESET_GAME);
        } else {
          this.$store.commit(CHANGE_TURN);
        }
      }
    }
  },
}
</script>