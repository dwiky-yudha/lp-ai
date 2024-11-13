import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css'; // Import PrimeFlex
import 'primevue/resources/themes/lara-light-blue/theme.css'

import Button from "primevue/button"
import Card from "primevue/card"
import Menubar from 'primevue/menubar';
import Chip from 'primevue/chip';
import Divider from 'primevue/divider';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Dialog from 'primevue/dialog';


const app = createApp(App);

app.component('Button', Button);
app.component('Card', Card);
app.component('Menubar', Menubar);
app.component('Chip', Chip);
app.component('Divider', Divider);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Dialog', Dialog);

app.use(PrimeVue);

app.mount('#app');
