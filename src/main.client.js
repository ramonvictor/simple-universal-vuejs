import Vue from 'vue'
import Content from './components/Content.vue'
import { store } from './store.js'

let MyContent = Vue.extend({
  extends: Content
});

let vm = new MyContent({
	propsData: store
});

vm.$mount('#content', true);
