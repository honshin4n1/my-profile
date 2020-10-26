<template>
  <div class="container">
    <HeaderNav></HeaderNav>
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "./components/Home.vue"
import HeaderNav from "./components/HeaderNav.vue"
// import About from "./components/About.vue"
// import Skills from "./components/Skills.vue"
export default {
  data() {
    return {
      
    }
  },
  components: {
    HeaderNav
  }
}
</script>

<style>
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
  .title {
  text-align: center;
}

</style>
