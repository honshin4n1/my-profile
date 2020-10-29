import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// import About from "./views/About.vue";
// import Skills from "./views/Skills.vue";
// import Contact from "./views/Contact.vue";
// import Works from "./views/Works.vue"
const Home = () => import("./views/Home.vue");
const About = () => import("./views/About.vue");
const Skills = () => import("./views/Skills.vue");
const Contact = () => import("./views/Contact.vue");
const Works = () => import("./views/Works.vue");

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{path: '/', component: Home}, {path: '/about', component: About}, {path: '/skills', component: Skills}, {path: '/works', component: Works}, {path: '/contact', component: Contact}]
});