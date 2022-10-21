import { createStore } from 'vuex'
import AuthModule from './AuthModule'
import ProductsModule from './ProductsModule'

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
    products: ProductsModule
  }
})
