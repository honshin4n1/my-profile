<template>
  <div class="voicememo">
    <img src="@/assets/images/VoiceMemo.png" alt="voicememo">
    <p>Ruby on Rails + AWS</p>
    <p>VoiceMemoApp</p>
    <a href="https://www.myvoicememo.com/" target="_blank">https://www.myvoicememo.com/</a>
    <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
  </div>
</template>

<style scoped>
.voicememo {
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