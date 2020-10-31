<template>
<div class="main">
  <div class="title">
    <h1><font-awesome-icon icon="graduation-cap"></font-awesome-icon></h1>
    <h1>Skills</h1>
  </div>
  <Languages></Languages>
  <Frameworks></Frameworks>
  <Others></Others>
</div>
</template>

<script>
import Languages from "./Languages.vue";
import Frameworks from "./Frameworks.vue";
import Others from "./Others.vue";

export default {
  components: {
    Languages,
    Frameworks,
    Others
  }
}
</script>

<style scoped>
.main {
  height: 100%;
  width: 80%;
  margin: 0 auto;
}

</style>