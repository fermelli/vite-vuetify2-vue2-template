export const namespaced = true

export const state = {
    count: 0,
}

export const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    },
}

export const actions = {
    increment({ commit }) {
        commit('INCREMENT')
    },
    decrement({ commit }) {
        commit('DECREMENT')
    },
}

export const getters = {
    count: (state) => {
        return state.count
    },
}
