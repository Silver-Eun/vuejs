<template>
  <div>
    <div>
      <router-link to="/game/index">gameMatcher</router-link>
      <router-link to="/game/numberBaseball">numberBaseball</router-link>
      <router-link to="/game/responseCheck">responseCheck</router-link>
      <router-link to="/game/rockScissorsPaper">rockScissorsPaper</router-link>
      <router-link to="/game/lottoGenerator">lottoGenerator</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './routes'

export default {
  router,
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