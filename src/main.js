import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Image from 'primevue/image';
import Password from 'primevue/password';
import MegaMenu from 'primevue/megamenu';
import Steps from 'primevue/steps';
import InputText from 'primevue/inputtext';
import Accordion from 'primevue/accordion';
import Checkbox from 'primevue/checkbox';
import InputMask from 'primevue/inputmask';
import Panel from 'primevue/panel';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import TreeSelect from 'primevue/treeselect';
import Calendar from 'primevue/calendar';
import ToastService from 'primevue/toastservice';





import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css' //
import Toast from 'primevue/toast';




const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);

app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('Card', Card);
app.component('Image', Image);
app.component('Password', Password);
app.component('MegaMenu', MegaMenu);
app.component('Steps', Steps);
app.component('InputText', InputText);
app.component('Accordion, Menu', Accordion);
app.component('Toast', Toast);
app.component('Checkbox', Checkbox);
app.component('InputMask', InputMask);
app.component('Panel', Panel);
app.component('Dropdown', Dropdown);
app.component('RadioButton', RadioButton);
app.component('TreeSelect', TreeSelect);
app.component('Calendar', Calendar);

app.mount('#app')
