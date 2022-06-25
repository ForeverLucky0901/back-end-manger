import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../asset/css/normalize.css';
import '../asset/css/common.css';
// 全局引入element-tiptap
import { ElementTiptapPlugin } from 'element-tiptap';
// import element-tiptap 样式
import 'element-tiptap/lib/index.css';
Vue.use(ElementUI);
//使用element-tiptap
Vue.use(ElementTiptapPlugin, {
  lang: 'zh',
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')