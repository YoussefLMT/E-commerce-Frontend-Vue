import axiosInstance from '../axios'

const UsersModule = {
    namespaced: true,
    state: {
        users: [],
        loading: false
    },
    getters: {
        users(state) {
            return state.users
        },

        loading(state) {
            return state.loading
        }
    },
    mutations: {
        getUsers(state, users) {
            state.users = users
        },

        setLoading(state, loading) {
            state.loading = loading
        },
    },
    actions: {
        getUsers({ commit }) {
            commit('setLoading', true)

            axiosInstance.get('/users')
                .then(response => {
                    commit('getUsers', response.data.users)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },

    },
}

export default UsersModule