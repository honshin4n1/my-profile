<template>
  <nav class="header-nav">
    <div class="nav-link">
      <router-link to="/" class="link" active-class="link--active" exact>home</router-link>
    </div>
    <div class="nav-link">
      <router-link to="/about" class="link" active-class="link--active" exact>about</router-link>
    </div>
    <div class="nav-link">
      <router-link to="/skills" class="link" active-class="link--active" exact>skills</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style>
  .header-nav {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    position: absolute;
    bottom: 50px;
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

</style>