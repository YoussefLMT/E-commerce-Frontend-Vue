import { createStore } from 'vuex'
import AuthModule from './AuthModule'
import ProductsModule from './ProductsModule'
import SpecificProductsModule from './SpecificProductsModule'
import ProductDetailsModule from './ProductDetailsModule'
import CartModule from './CartModule'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: AuthModule,
    products: ProductsModule,
    specificProducts: SpecificProductsModule,
    productDetails: ProductDetailsModule,
    cart: CartModule,
  }
})
