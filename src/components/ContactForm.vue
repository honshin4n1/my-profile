<template>
  <div class="contact-form">
    <form @submit.prevent="submitForm" name="contact" method="POST" netlify>
      <div class="form-group">
        <label for="name">名前:</label>
        <span v-if="$v.contactData.name.$error">必須項目です。入力されていません。</span>
        <br>
        <input id="name" type="text" v-model="contactData.name" @blur="$v.contactData.name.$touch()" :class="{ error : $v.contactData.name.$error}">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <div v-if="$v.contactData.email.$error" class="email-error-message">
          <span v-if="!$v.contactData.email.required">必須項目です。入力されていません。</span>
          <span v-if="!$v.contactData.email.email">形式が正しくありません。</span>
        </div>
        <br>
        <input id="email" type="email" v-model="contactData.email" @blur="$v.contactData.email.$touch()" :class="{ error : $v.contactData.email.$error}">
      </div>
      <div class="form-group">
        <label for="comment">内容:</label>
        <span v-if="$v.contactData.comment.$error">必須項目です。入力されていません。</span>
        <br>
        <textarea id="comment" cols="30" rows="5" v-model="contactData.comment" @blur="$v.contactData.comment.$touch()" :class="{ error : $v.contactData.comment.$error}"></textarea>
      </div>
      <div class="form-group">
        <button type="submit">送信</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
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
  validations: {
    contactData: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      comment: {
        required
      }
    }
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if(this.$v.$invalid) {
        console.log('バリデーションエラー');
      }else{
        console.log('submit');
      }
    }
  }
}
</script>

<style scoped>
.contact-form {
  width: 60%;
  height: 80%;
  margin: 50px auto;
  padding-top: 50px;
  padding-bottom: 50px;
  border: 1px solid darkgrey;
  border-radius: 4px;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
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
.form-group {
  width: 80%;
  margin: auto;
}

input {
  width: 100%;
  height: 40px;
  outline: none;
  margin-bottom: 20px;
  padding: 5px;
  border: 1px solid darkgrey;
}
textarea {
  width: 100%;
  outline: none;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid darkgrey;
}

button {
  height: 40px;
  width: 100%;
  outline: none;
  border: 1px solid darkgrey; 
  border-radius: 4px;
  background-color: darkseagreen;
  cursor: pointer;
}
.email-error-message {
  display: inline;
}
span {
  color: red;
}
.error {
	color: #8a0421;
	border-color: #dd0f3b;
	background-color: #ffd9d9;
}
@media (max-width: 1000px) {
  .contact-form {
    width: 90%;
  }
}
</style>