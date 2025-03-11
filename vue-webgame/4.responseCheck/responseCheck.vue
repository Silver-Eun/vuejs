<template>
  <div>
    <div id="screen" v-bind:class="state">{{ message }}</div>
    <div>
      <div>Avg Time: {{}}</div>
      <button @click="onReset">Reset</button>
    </div>
  </div>
</template>

<script>
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