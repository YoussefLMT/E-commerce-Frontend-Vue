import axiosInstance from '../axios'

const CartModule = {
    namespaced: true,
    state: {
        cart_products: [],
        loading: false
    },
    getters: {
        cartProducts(state) {
            return state.cart_products
        },

        loading(state) {
            return state.loading
        }
    },
    mutations: {
        getCartProducts(state, cart_products) {
            state.cart_products = cart_products
        },

        setLoading(state, loading) {
            state.loading = loading
        },
    },
    actions: {
        getCartProducts({ commit }) {
            commit('setLoading', true)

            axiosInstance.get('/get-cart-products')
                .then(response => {
                    commit('getCartProducts', response.data.cart_products)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },
    },
}

export default CartModule