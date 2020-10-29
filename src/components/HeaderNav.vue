<template>
  <nav class="nav">
    <div class="nav-link">
      <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
    </div>
    <div class="nav-link">
      <router-link to="/about" class="link" active-class="link--active" exact>About</router-link>
    </div>
    <div class="nav-link">
      <router-link to="/works" class="link" active-class="link--active" exact>Works</router-link>
    </div>
    <div class="nav-link">
      <router-link to="/skills" class="link" active-class="link--active" exact>Skills</router-link>
    </div>
    <div class="nav-link">
      <router-link to="/contact" class="link" active-class="link--active" exact>Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style>
.nav {
  height: 50px;
  width: 60%;
  display: flex;
  justify-content: center;
  background-color: #fff;
  margin: auto;
  position: fixed;
  left: 20%;
  bottom: 50px;
  opacity: 0.8;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
}
.nav-link {
  margin: 10px;
}
.link {
  text-decoration: none;
  color: dimgray;
}
.link--active {
  color: darkgrey;
}

@media (max-width: 800px) {
  .nav {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 10px;
  }
}

</style>