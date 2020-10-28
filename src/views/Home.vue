<template>
  <div class="main">
    <div class="title">
      <h1>SHINICHI HONDA</h1>
      <div class="img-box animate__animated animate__backInUp">
        <img src="@/assets/IMG_0548-cutout.png" alt="img">
      </div>
      <transition name="fade" appear>
        <h3>Thank you for visiting!!</h3>
      </transition>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
html, body {
  height: 100%;
  width: 100%;
}
.container {
  height: 100%;
  width: 80%;
  margin: 0 auto;
  position: relative;
}
.main {
  height: 100%;
  width: 80%;
  margin: 0 auto;
}
.title {
text-align: center;
width: 100%;
height: 100%;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: 5s;
}
.fade-enter-to{
  opacity: 1;
}

.img-box {
  /* width: 100%;
  height: 100%; */
}
img {
  width: 30%;
  height: 30%;
}
</style>

