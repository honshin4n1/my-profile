<template>
  <div class="home">
    <div class="home-title">
      <h1>
        <vue-typer :text="NameText" :repeat="0" :pre-type-delay ="700"></vue-typer>
      </h1>
      <h3>
        <vue-typer :text="ThanksText" :repeat="0" :pre-type-delay ="1800"></vue-typer>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      NameText: 'SHINICHI HONDA',
      ThanksText: 'Thank you for visiting!!'
    }
  }
}
</script>


<style scoped>
.home {
  height: 100vh;
  width: 100%;
  background: radial-gradient(#ffffff, #708090);
  position: relative;
}
.home-title {
  width: 60%;
  text-align: center;
  margin: auto;
  position: absolute;
  top: 30%;
  left: 20%;
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
@media (max-width: 500px) {
  h1 {
    font-size: 24px;
  }
  h3 {
    font-size: 16px;
  }
}
</style>

