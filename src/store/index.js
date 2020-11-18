/* basically entry point for vuex. Combines  all modules. 
 root reducer which combines multiple reducers together. 
*/

import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/Todos';

// Load Vuex 
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        todos
    }
});
