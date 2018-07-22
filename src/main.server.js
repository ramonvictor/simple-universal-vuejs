import Vue from 'vue'
import App from './App.vue'

import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'


Vue.component('my-header', Header);
Vue.component('my-content', Content);
Vue.component('my-footer', Footer);

// Receives the context of the render call, returning a Promise resolution to the root Vue instance.
export default context => {
  return Promise.resolve(
    new Vue({
      render: h => h(App)
    })
  );
}