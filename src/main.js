import { createApp } from 'vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/miltonian-tattoo";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill, PiBulbasaur, PiCharmander, PiSquirtle } from "oh-vue-icons/icons";


addIcons(FaFlag, RiZhihuFill, PiBulbasaur, PiCharmander, PiSquirtle);

import App from './App.vue'
const app = createApp(App);
app.component("v-icon", OhVueIcon);

app.mount('#app')


