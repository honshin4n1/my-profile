<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <HeaderNav></HeaderNav>
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue"

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

<style scoped>
* {
  box-sizing: border-box;
}
html, body {
  min-height: 100vh;
  width: 100%;
}
.container {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.title {
text-align: center;
width: 100%;
height: 100%;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

</style>
