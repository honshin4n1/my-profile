<template>
  <div class="voicememo">
    <a href="https://www.myvoicememo.com/" target="_blank">
      <img src="@/assets/images/VoiceMemo.png" alt="voicememo">
    </a>
    <p><a href="https://www.myvoicememo.com/" target="_blank">Voice Memo</a></p>
    <p class="tool">Ruby on Rails + AWS</p>
    <a href="https://github.com/honshin4n1/voice_memo_app" target="_blank"> 
      <font-awesome-icon :icon="['fab', 'github']" class="github-icon"></font-awesome-icon>
    </a>
  </div>
</template>

<style scoped>
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
}
</style>