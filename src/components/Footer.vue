<template>
  <div class="footer">
    <div class="sns-icon-group">
      <font-awesome-icon :icon="['fab', 'twitter']" class="sns-icon"></font-awesome-icon>
      <font-awesome-icon :icon="['fab', 'facebook']" class="sns-icon"></font-awesome-icon>
      <font-awesome-icon :icon="['fab', 'instagram']" class="sns-icon"></font-awesome-icon>
    </div>
    <p>Copyright (C) 2020 Shinichi Honda All rights reserved.</p>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  height: 200px;
  position: fixed;
  bottom: 0px;
  background-color: #708090;
}
.sns-icon-group {
  margin: 20px;
  position: absolute;
  right: 50px;
}
.sns-icon {
  font-size: 35px;
  color: #fff;
  margin: 10px;
}
p {
  width: 50%;
  text-align: center;
  font-size: 10px;
  position: absolute;
  bottom: 0;
  left: 25%;
}
</style>