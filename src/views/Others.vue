<template>
  <div class="skills-box animate__animated animate__fadeInDownBig">
    <div class="skills-title">
      <h2>Others</h2>
    </div>
      <div class="skills-icon-flex">
        <div class="icon-set">
          <font-awesome-icon :icon="['fab', 'aws']" class="php-icon"></font-awesome-icon>
          <p class="php-text">AWS</p>
        </div>
        <div class="icon-set">
          <font-awesome-icon :icon="['fab', 'github']" class="js-icon"></font-awesome-icon>
          <p>Git</p>
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