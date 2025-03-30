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

const scores = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
}

let interval = null;
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
    changeHand() {
      interval = setInterval(() => {
        if (this.imgCoord === rspCoords.rock) {
          this.imgCoord = rspCoords.scissors;
        } else if (this.imgCoord === rspCoords.scissors) {
          this.imgCoord = rspCoords.paper;
        } else if (this.imgCoord === rspCoords.paper) {
          this.imgCoord = rspCoords.rock;
        }
      }, 100);
    },
    onClickButton(choice) {
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(this.imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.result = 'compare';
      } else if ([-1, 2].includes(diff)) {
        this.result = "win";
        this.score += 1;
      } else {
        this.result = 'defeat';
        this.score -= 1;
      }
      setTimeout(() => {
        this.changeHand()
      }, 1000)
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('mounted');
  },
  mounted() {
    this.changeHand();
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
    clearInterval(interval);
  },
  destroyed() {
    console.log('destroyed');
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