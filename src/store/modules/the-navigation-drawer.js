export const namespaced = true

export const state = {
    isOpen: false,
}

export const mutations = {
    SET_IS_OPEN(state) {
        state.isOpen = !state.isOpen
    },
}

export const actions = {
    setIsOpen({ commit }) {
        commit('SET_IS_OPEN')
    },
}
