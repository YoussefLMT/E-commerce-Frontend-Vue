import axiosInstance from '../axios'

const ProductsModule = {
    namespaced: true,
    state: {
        products: [],
        loading: false
    },
    getters: {
        products(state) {
            return state.products
        },

        loading(state) {
            return state.loading
        }
    },
    mutations: {
        getPrducts(state, products) {
            state.products = products
        },

        setLoading(state, loading) {
            state.loading = loading
        },
    },
    actions: {
        getProducts({ commit }) {
            commit('setLoading', true)

            axiosInstance.get('/products')
                .then(response => {
                    commit('getProducts', response.data.products)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },

    },
}

export default ProductsModule