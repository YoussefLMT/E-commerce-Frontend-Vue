import axiosInstance from '../axios'

const OrdersModule = {
    namespaced: true,
    state: {
        user_orders: [],
        orders: [],
        loading: false
    },
    getters: {
        userOrders(state) {
            return state.user_orders
        },

        orders(state) {
            return state.orders
        },

        loading(state) {
            return state.loading
        }
    },
    mutations: {
        getUserOrders(state, user_orders) {
            state.user_orders = user_orders
        },

        getOrders(state, orders) {
            state.orders = orders
        },

        setLoading(state, loading) {
            state.loading = loading
        },
    },
    actions: {
        getUserOrders({ commit }) {
            commit('setLoading', true)

            axiosInstance.get('/get-user-orders')
                .then(response => {
                    commit('getUserOrders', response.data.user_orders)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },

        getOrders({ commit }) {
            commit('setLoading', true)

            axiosInstance.get('/get-orders')
                .then(response => {
                    commit('getOrders', response.data.orders)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },
    },
}

export default OrdersModule