/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";


//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Row from 'primevue/row';  
import Dialog from 'primevue/dialog';  
import Button from 'primevue/button';  
import Card from 'primevue/card';

// import './axios'


import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';


const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.component('Card ', Card);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Row', Row);
app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Checkbox ', Checkbox);


app.mount('#app')
