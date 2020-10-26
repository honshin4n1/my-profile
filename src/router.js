import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue"
import Skills from "./views/Skills.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{path: '/', component: Home}, {path: '/about', component: About}, {path: '/skills', component: Skills}]
});