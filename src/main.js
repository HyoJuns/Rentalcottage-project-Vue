import Vue from 'vue'
import App from './App.vue'

import router from './router/router';
import "../fontAwsomeIcon";

new Vue({
  el: '#app',router,
  render: h => h(App)
})
