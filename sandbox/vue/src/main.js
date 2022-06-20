import Vue from 'vue';
import App from './App.vue';
import { defineCustomElements, addTheme } from '@scania/components';
import { theme as scania } from '@scania/theme-light';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/sdds-\w*/, /c-\w*/];

defineCustomElements();
addTheme(scania);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
