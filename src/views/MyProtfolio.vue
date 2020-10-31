<template>
  <div class="my-protfolio">
    <img src="@/assets/images/MyProtfolioImg.png" alt="MyProtfolio">
    <p>Vue.js</p>
    <p>My Profile</p>
    <a href="#" target="_blank">https://www</a>
    <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
  </div>
</template>

<style scoped>
.my-protfolio {
  width: 500px;
  height: 400px;
  margin: 70px auto;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
}

img {
  width: 500px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
}
</style>