import { createStore } from 'vuex';

import storeTasks from './store-tasks';


// Vue.use(Vuex)

const store = createStore({
  modules: {
    storeTasks
  },
});

export default store;

