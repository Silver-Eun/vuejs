<template>
  <div v-if="currentGame === 'numberBaseball'">
    <number-baseball></number-baseball>
  </div>
  <div v-else-if="currentGame === 'responseCheck'">
    <response-check></response-check>
  </div>
  <div v-else-if="currentGame === 'rockScissorsPaper'">
    <rock-scissors-paper></rock-scissors-paper>
  </div>
  <div v-else-if="currentGame === 'lottoGenerator'">
    <lotto-generator></lotto-generator>
  </div>
  <div v-else>there is no matched game</div>
</template>
<script>
import NumberBaseball from "../3.NumberBaseball/NumberBaseball.vue";
import ResponseCheck from "../4.ResponseCheck/ResponseCheck.vue";
import RockScissorsPaper from "../5.RockScissorsPaper/RockScissorsPaper.vue";
import LottoGenerator from "../6.lotto/LottoGenerator.vue";

export default {
  components: {
    NumberBaseball,
    ResponseCheck,
    RockScissorsPaper,
    LottoGenerator,
  },
  mounted() {
    console.log(this.$router);
  },
  computed: {
    currentGame() {
      return this.$router.params.name;
    }
  }
}
</script>