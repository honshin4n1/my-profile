<template>
  <div class="contact">
    <div class="main">
      <div class="title">
        <h1 class="animate__animated animate__backInUp"><font-awesome-icon icon="envelope"></font-awesome-icon></h1>
        <h1>Contact</h1>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  }
}
</script>

<style scoped>
.contact {
  height: 100%;
  width: 100%;
}
.main {
  height: 100%;
  width: 80%;
  margin: 0 auto;
}
</style>