import Vue from 'vue';
import App from './App.vue';
import VueTimeLine from '@growthbunker/vuetimeline';
import titleMixin from "@/mixins/titleMixin.js";
Vue.mixin(titleMixin);
Vue.config.productionTip = false;
Vue.use(VueTimeLine, {theme: 'light'});

new Vue({
  render: h => h(App),
}).$mount('#app')
