import axiosInstance from '../axios'

const SpecificProductsModule = {
    namespaced: true,
    state: {
        latest_product: [],
        home_products: [],
        loading: false
    },
    getters: {
        latestProducts(state) {
            return state.latest_product
        },

        homeProducts(state) {
            return state.home_products
        },

        loading(state) {
            return state.loading
        }
    },
    mutations: {
        getHomeProduct(state, home_products) {
            state.home_products = home_products
        },

        getLatestProduct(state, latest_product) {
            state.latest_product = latest_product
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
                    commit('getLatestProducts', response.data.latest_product)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },
    },
}

export default SpecificProductsModule