import axiosInstance from '../axios'

const SpecificProductsModule = {
    namespaced: true,
    state: {
        latest_products: [],
        home_products: [],
        loading: false
    },
    getters: {
        latestProducts(state) {
            return state.latest_products
        },

        homeProducts(state) {
            return state.home_products
        },

        loading(state) {
            return state.loading
        }
    },
    mutations: {
        getHomeProducts(state, home_products) {
            state.home_products = home_products
        },

        getLatestProducts(state, latest_products) {
            state.latest_products = latest_products
        },

        setLoading(state, loading) {
            state.loading = loading
        },
    },
    actions: {
        getSpecificProducts({ commit }) {
            commit('setLoading', true)

            axiosInstance.get('/specific-products')
                .then(response => {
                    commit('getHomeProducts', response.data.home_products)
                    commit('getLatestProducts', response.data.latest_products)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },
    },
}

export default SpecificProductsModule