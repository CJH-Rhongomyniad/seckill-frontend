import Vue from 'vue'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'
// import store from './store'

Vue.config.productionTip = false

Vue.use(ElementPlus);

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app')