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
      <div class="contact-form">
        <div class="form-box">
          <form>
            <div class="form-group">
              <label for="name">名前</label>
              <br>
              <input id="name" type="text" v-model.lazy="contactData.name">
              <p>{{contactData.name}}</p>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <br>
              <input id="email" type="email" v-model.lazy="contactData.email">
              <p>{{contactData.email}}</p>
            </div>
            <div class="form-group">
              <label for="comment">内容</label>
              <br>
              <textarea id="comment" cols="30" rows="5" v-model.lazy="contactData.comment"></textarea>
              <p>{{contactData.comment}}</p>
            </div>
            <div class="form-group">
              <button type="submit">送信</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      contactData: {
        name: '',
        email: '',
        comment: ''
      }
    };
  },
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
.contact-form {
  width: 100%;
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
h3 {
  width: 50%;
  margin: 0;
  color: aliceblue;
  position: absolute;
  top: 30%;
  left: 25%;
}
.form-group {
  width: 70%;
  margin: auto;
}
input {
  width: 60%;
  outline: none;
  padding: 5px;
  border: 1px solid darkgrey;
}
textarea {
  width: 60%;
  outline: none;
  padding: 5px;
  border: 1px solid darkgrey;
}
.info-enter, .info-leave-to {
  opacity: 0;
}
.info-enter-active, .info-leave-active {
  transition: opacity 5s;
}
button {
  height: 30px;
  width: 50px;
  outline: none;
  border: 1px solid darkgrey; 
  border-radius: 4px;
  background-color: darkseagreen;
}
</style>