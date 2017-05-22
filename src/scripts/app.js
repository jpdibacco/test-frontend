
var Vue  = require("vue");

App = module.exports = new Vue({

  el: '#app',
  components: {
    'vue-header'  : require('./vue/header.vue'),
    'vue-sidebar' : require('./vue/sidebar.vue'),
    'vue-main'    : require('./vue/main.vue')
  },

  data:{
    todo: []
  },

  created: function(){

  },

  methods: {

  }

});
