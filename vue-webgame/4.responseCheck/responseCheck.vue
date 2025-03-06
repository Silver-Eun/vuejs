<template>
  <div>
    <div id="screen">{{}}</div>
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
    }
  },
  methods: {
    onReset() {

    }
  }
}
</script>

<style></style>