<template>
  <div class="contact">
    <transition name="info" appear>
      <div class="contact-info">
        <h3>只今、メンテナンス中です。</h3>
      </div>
    </transition>
    <div class="main">
      <div class="title">
        <h1><font-awesome-icon icon="envelope"></font-awesome-icon></h1>
        <h1>Contact</h1>
      </div>
      <ContactForm></ContactForm>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue";
// import axios from "axios";

export default {
  components: {
    Footer,
    ContactForm
  }
}
</script>

<style scoped>
.contact {
  height: 100%;
  width: 100%;
  padding-bottom: 200px;
}
.main {
  height: 100%;
  width: 80%;
  margin: 0 auto;
}

h3 {
  width: 50%;
  margin: 0;
  color: aliceblue;
  position: absolute;
  top: 30%;
  left: 25%;
}

.contact-info {
  height: 100%;
  width: 100%;
  line-height: 200%;
  text-align: center;
  opacity: 0.8;
  position: fixed;
  top: 0;
  background-color: black;
}

.info-enter, .info-leave-to {
  opacity: 0;
}
.info-enter-active, .info-leave-active {
  transition: opacity 5s;
}

</style>