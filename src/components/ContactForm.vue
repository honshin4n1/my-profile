<template>
  <div class="contact-form">
    <h3>お問い合わせ</h3>
    <form ref="form" @submit.prevent="submitForm" name="contact" method="POST" netlify>
      <input type="hidden" name="subject" value="subject" />
      <div class="form-group">
        <label for="name">名前:</label>
        <span v-if="$v.contactData.name.$error">必須項目です。入力されていません。</span>
        <br>
        <input name="name" id="name" type="text" v-model="contactData.name" @blur="$v.contactData.name.$touch()" :class="{ error : $v.contactData.name.$error}">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <div v-if="$v.contactData.email.$error" class="email-error-message">
          <span v-if="!$v.contactData.email.required">必須項目です。入力されていません。</span>
          <span v-if="!$v.contactData.email.email">形式が正しくありません。</span>
        </div>
        <br>
        <input name="email" id="email" type="email" v-model="contactData.email" @blur="$v.contactData.email.$touch()" :class="{ error : $v.contactData.email.$error}">
      </div>
      <div class="form-group">
        <label for="comment">内容:</label>
        <span v-if="$v.contactData.comment.$error">必須項目です。入力されていません。</span>
        <br>
        <textarea name="comment" id="comment" cols="30" rows="5" v-model="contactData.comment" @blur="$v.contactData.comment.$touch()" :class="{ error : $v.contactData.comment.$error}"></textarea>
      </div>
      <div class="form-group">
        <button type="submit">送信</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import axios from "axios";

export default {
  data() {
    return {
      contactData: {
        subject: 'お問い合わせ',
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
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    submitForm() {
      this.$v.$touch();
      if(this.$v.$invalid) {
        console.log('バリデーションエラー');
      }else{
        const axiosConfig = {
          header: { "Content-Type": "application/x-www-form-urlencoded" }
        };
        axios.post(
        "/",
        this.encode({
          "form-name": "contact",
          ...this.contactData
        }),
        axiosConfig
        )
        .then(() => {
          this.$refs.form.reset()
          alert('お問い合わせありがとうございます。送信完了しました。')
        })
        .catch(error => {
          console.log(error)
          alert('送信に失敗しました。時間をおいて再度お試しください。')
        })
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
  padding-bottom: 50px;
  border: 1px solid darkgrey;
  border-radius: 4px;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
}

h3 {
  text-align: center;
  margin: 30px 0;
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