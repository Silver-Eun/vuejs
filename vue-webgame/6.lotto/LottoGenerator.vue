<template>
  <div>
    <div>당첨 숫자</div>
    <div id="result">
      <lotto-ball v-for="ball in winBalls"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus"></lotto-ball>
    <button v-if="redo">한 번 더</button>
  </div>
</template>

<script>
import LottoBall from "./LottoBall.vue";

export default {
  components: {LottoBall},
  data() {
    return {
      winBalls: {},
      bonus: null,
      redo: false,
    }
  },
  computed: {},
  methods: {},
  beforeDestroy() {
  },
  watch: {}
}
</script>

<style scoped></style>