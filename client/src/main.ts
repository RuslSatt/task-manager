import { createApp } from 'vue';
import '@/app/styles/reset.css';
import '@/app/styles/main.css';
import '@/app/styles/variables.css';
import App from './app/App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import { registrationComponents } from './shared/ui/components';
import { createPinia } from 'pinia';

import 'primevue/resources/themes/aura-dark-green/theme.css';
import 'primeicons/primeicons.css';

export const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(PrimeVue);
app.use(pinia);

registrationComponents();

app.mount('#app');
