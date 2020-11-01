<template>
  <div class="my-protfolio">
    <a href="https://github.com/honshin4n1/my-profile" target="_blank">
      <div class="explanation">
        <p class="explanation-text">訪問ありがとうございます。</p>
        <p class="explanation-text">現在ご覧いただいているサイトです。</p>
        <p class="explanation-text">Vue.jsを使用してSPAの自己紹介サイトを作成しました。</p>
        <p class="explanation-text">（リンク先はGitHubです。）</p>
      </div>
      <font-awesome-icon :icon="['fab', 'github']" class="github-icon"></font-awesome-icon>
    </a>
    <img src="@/assets/images/MyProtfolioImg.png" alt="MyProtfolio">
    <p><a href="https://sh-portfolio-site.com" target="_blank">My Profile</a></p>
    <p class="tool">Vue.js</p>
  </div>
</template>

<style scoped>
.my-protfolio {
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
  .my-protfolio {
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