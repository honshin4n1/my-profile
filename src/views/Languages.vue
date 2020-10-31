<template>
  <div class="skills-box animate__animated animate__fadeInDownBig">
    <div class="skills-title">
      <h2>Languages</h2>
    </div>
      <div class="skills-icon-flex">
        <div class="icon-set">
          <font-awesome-icon icon="code" class="code-icon"></font-awesome-icon>
          <p>HTML/CSS/Sass</p>
        </div>
        <div class="icon-set">
          <font-awesome-icon :icon="['far', 'gem']" class="ruby-icon"></font-awesome-icon>
          <p>Ruby</p>
        </div>
        <div class="icon-set">
          <font-awesome-icon :icon="['fab', 'js']" class="js-icon"></font-awesome-icon>
          <p>JavaScript</p>
        </div>
        <div class="icon-set">
          <font-awesome-icon :icon="['fab', 'php']" class="php-icon"></font-awesome-icon>
          <p class="php-text">PHP</p>
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
.php-text {
  font-size: 13px;
}
</style>