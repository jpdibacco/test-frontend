
var Vue  = require("vue"),
VueRouter = require('vue-router'),
Education = require('./vue/education.vue'),
About = require('./vue/about.vue'),
Skills = require('./vue/skills.vue'),
WorkExperience = require('./vue/workxp.vue');
Vue.use(VueRouter);
const routes = [
  {path:'/education', component: Education},
  {path: '/workxp',component: WorkExperience},
  {path: '/skills',component: Skills},
  {path: '/',component: About}
];
const router = new VueRouter({
  routes,
  mode:'hash'
})
App = module.exports = new Vue({
  el: '#app',
  router,
  components:{
    'vue-sidebar' : require('./vue/sidebar.vue'),
    'vue-main'    : require('./vue/main.vue')
  }
});
App.$mount('#app');
