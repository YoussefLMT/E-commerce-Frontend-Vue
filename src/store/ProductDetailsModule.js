import axiosInstance from '../axios'

const ProductDetailsModule = {
    namespaced: true,
    state: {
        product: [],
        loading: false
    },
    getters: {
        product(state) {
            return state.product
        },

        loading(state) {
            return state.loading
        }
    },
    mutations: {
        getProduct(state, product) {
            state.product = product
        },

        setLoading(state, loading) {
            state.loading = loading
        },
    },
    actions: {
        getProduct({ commit }, id) {
            commit('setLoading', true)

            axiosInstance.get(`/get-product/${id}`)
                .then(response => {
                    commit('getProduct', response.data.product)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },
    },
}

export default ProductDetailsModule