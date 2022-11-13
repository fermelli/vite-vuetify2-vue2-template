import Vue from 'vue'
import Vuex from 'vuex'
import * as counter from './modules/counter'
import * as theNavigationDrawer from './modules/the-navigation-drawer'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        counter,
        theNavigationDrawer,
    },
})
