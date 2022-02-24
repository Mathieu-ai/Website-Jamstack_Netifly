import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import CMS from 'netlify-cms-app';
// Initialize the CMS object

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* add icons to the library */
library.add(faUserSecret);

CMS.init();
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('my-template', MyTemplate);
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
