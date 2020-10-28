<template>
  <div class="main">
    <div class="title">
      <h1 class="animate__animated animate__backInUp"><font-awesome-icon icon="hammer"></font-awesome-icon></h1>
      <h1>Works</h1>
    </div>
    <VoiceMemo></VoiceMemo>
    <MyProtfolio></MyProtfolio>
  </div>
</template>

<script>
import VoiceMemo from "./VoiceMemo.vue"
import MyProtfolio from "./MyProtfolio.vue"
export default {
  components: {
    VoiceMemo,
    MyProtfolio
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
html, body {
  height: 100%;
  width: 100%;
}
.container {
  height: 100%;
  width: 80%;
  margin: 0 auto;
  position: relative;
}
.main {
  height: 100%;
  width: 80%;
  margin: 0 auto;
}
.title {
text-align: center;
width: 100%;
height: 100%;
}
</style>