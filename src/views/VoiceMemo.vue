<template>
  <div class="voicememo" @mouseover="MouseOver" @mouseleave="MouseLeave">
    <a href="https://github.com/honshin4n1/voice_memo_app" target="_blank">
      <transition name="slide">
        <div class="explanation" v-if="hoverExplanation">
          <p class="explanation-text">手軽に使えるメモアプリです。</p>
          <p class="explanation-text">Web Speech APIによりChrome環境では音声入力が可能</p>
          <p class="explanation-text">Ruby on Railsを使用し作成。</p>
          <p class="explanation-text">インフラにはAWSを用いてデプロイしています。</p>
          <p class="explanation-text">詳細はGitHubに掲載しています。</p>
          <p class="explanation-text">是非ご覧ください。（リンク先はGitHubです。）</p>
        </div>
      </transition>
      <font-awesome-icon :icon="['fab', 'github']" class="github-icon"></font-awesome-icon>
    </a>
    <img src="@/assets/images/VoiceMemo.png" alt="voicememo">
    <p><a href="https://www.myvoicememo.com/" target="_blank">Voice Memo</a></p>
    <p class="tool">Ruby on Rails + AWS</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverExplanation: false
    }
  },
  methods: {
    MouseOver() {
      this.hoverExplanation = true
    },
    MouseLeave() {
      this.hoverExplanation = false
    }
  }
}
</script>

<style scoped>

/* .slide-enter-active {
  animation: slide-in 0.3s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;  
}
@keyframes slide-in {
  from {
    height: 0;
    transform: height 0.3;
  }
  to {
    transform: translateX(0);
  }
} */

.voicememo {
  width: 500px;
  height: 370px;
  margin: 70px auto;
  position: relative;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
}

img {
  width: 500px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
}

a {
  text-decoration: none;
  color: darkseagreen;
  font-size: 20px;
}
.github-icon {
  position: absolute;
  color: black;
  bottom: 20px;
  right: 20px;
  font-size: 40px;
}

p {
  margin-left: 20px;
}

.tool {
  font-size: 14px;
  color: darkgray;
}
.explanation {
  width: 500px;
  height: 273.95px;
  background-color: black;
  opacity: 0.8;
  color: #fff;
  position: absolute;
  top: 0;
}
.explanation-text {
  font-size: 18px;
  color: darkgray;
}

@media (max-width: 650px) {
  .main {
    width: 100%;
  }
  .voicememo {
    width: 300px;
    height: 250px;
  }
  img {
    width: 300px;
    height: auto;
  }
  a {
  font-size: 20px;
  }
  .github-icon {
    bottom: 20px;
    right: 20px;
    font-size: 30px;
  }

  p {
    margin: 10px 20px;
  }

  .tool {
    font-size: 14px;
    color: darkgray;
  }
  .explanation {
    width: 300px;
    height: 164.38px;
    background-color: black;
    opacity: 0.8;
    color: #fff;
    position: absolute;
    top: 0;
  }
  .explanation-text {
    font-size: 13px;
    color: darkgray;
    margin: 0 5px;
  }
}
</style>