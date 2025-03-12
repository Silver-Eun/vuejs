<template>
  <div>
    <div id="screen" v-bind:class="state"
         @click="onClickScreen">{{ message }}
    </div>
    <div>
      <div>Avg Time: {{ result.reduce((a, c) => a + c, 0) / result.length || 0 }}ms</div>
      <button @click="onReset">Reset</button>
    </div>
  </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
export default {
  data() {
    return {
      result: [],
      state: 'waiting',
      message: 'click to start'
    }
  },
  methods: {
    onReset() {
      this.result = [];
    },
    onClickScreen() {
      if (this.state === 'waiting') {
        this.state = 'ready';
        this.message = 'click when green'
        timeout = setTimeout(() => {
          this.state = 'now';
          this.message = 'click now!'
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000);
      } else if (this.state === 'ready') {
        clearTimeout(timeout);
        this.state = 'now';
        this.message = 'too fast, click when green'
      } else if (this.state === 'now') {
        endTime = new Date();
        this.state = 'waiting';
        this.message = 'click to start'
        this.result.push(endTime - startTime);
      }
    }
  }
}
</script>

<style scoped>
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}

#screen.waiting {
  background-color: aqua;
}

#screen.ready {
  background-color: red;
  color: white;
}

#screen.now {
  background-color: greenyellow;
}
</style>