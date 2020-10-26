<template>
  <div class="main-container">
    <div class="header-nav">
      <button @click="currentComponent = 'Home'">home</button>
      <button @click="currentComponent = 'About'">about</button>
      <button @click="currentComponent = 'Skills'">skills</button>
      <button>portfolio</button>
      <button>contact</button>
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue"
// import HeaderNav from "./components/HeaderNav.vue"
import About from "./components/About.vue"
import Skills from "./components/Skills.vue"
export default {
  data() {
    return {
      currentComponent: "Home"
    }
  },
  components: {
    Home,
    About,
    Skills
  }
}
</script>

<style>

</style>
