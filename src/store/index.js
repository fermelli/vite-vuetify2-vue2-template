import Vue from 'vue'
import Vuex from 'vuex'
import * as counter from './modules/counter'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        counter,
    },
})
