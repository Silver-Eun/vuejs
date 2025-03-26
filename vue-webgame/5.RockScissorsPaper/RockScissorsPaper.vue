<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('rock')">Rock</button>
      <button @click="onClickButton('scissors')">Scissors</button>
      <button @click="onClickButton('paper')">Paper</button>
    </div>
    <div>{{ result }}</div>
    <div>score: {{ score }}</div>
  </div>
</template>

<script>
const rspCoords = {
  rock: '0',
  scissors: '-142px',
  paper: '-284px',
}

export default {
  data() {
    return {
      imgCoord: rspCoords.rock,
      result: '',
      score: 0,
    }
  },
  computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
      };
    }
  },
  methods: {
    onClickButton(choice) {

    }
  }
}
</script>

<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>