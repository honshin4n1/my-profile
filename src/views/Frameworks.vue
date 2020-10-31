<template>
  <div class="skills-box animate__animated animate__fadeInDownBig">
    <div class="skills-title">
      <h2>Frameworks</h2>
    </div>
      <div class="skills-icon-flex">
        <div class="icon-set">
          <font-awesome-icon :icon="['far', 'gem']" class="ruby-icon"></font-awesome-icon>
          <p>Ruby on Rails</p>
        </div>
        <div class="icon-set">
          <font-awesome-icon :icon="['fab', 'js']" class="code-icon"></font-awesome-icon>
          <p>jQuery</p>
        </div>
        <div class="icon-set">
          <font-awesome-icon :icon="['fab', 'vuejs']" class="js-icon"></font-awesome-icon>
          <p>Vue.js</p>
        </div>
        <div class="icon-set">
          <font-awesome-icon :icon="['fab', 'laravel']" class="php-icon"></font-awesome-icon>
          <p class="laravel-text">Laravel</p>
        </div>
      </div>
  </div>
</template>

<style scoped>
h2 {
  color: darkgrey;
}
.skills-box {
  margin-top: 30px;
}
.skills-title {
  text-align: center;
}
.skills-icon-flex {
  display: flex;
  justify-content: space-around;
}
.icon-set {
  text-align: center;
}
.code-icon {
  font-size: 50px;
}
.ruby-icon {
  font-size: 50px;
}
.js-icon {
  font-size: 50px;
}
.php-icon {
  font-size: 25px;
  margin-top: 10px;
}
.laravel-text {
  font-size: 13px;
}
</style>