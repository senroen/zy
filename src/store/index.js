import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

import {createApp} from 'vue';
import App from '.././App.vue';
import Vuex from 'vuex';
createApp(App).use(Vuex)

import app from './modules/app';


export default createStore({
  modules:{
    app
  }
})

