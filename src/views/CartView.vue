<template>
<Navbar />

<div class="footer">
    <Footer />
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer.vue'
import store from '@/store'

export default {
    components: {
        Navbar,
        Footer,
    },
    mounted() {
        store.dispatch('cart/getCartProducts')
    },
    computed: {
        cartProducts() {
            return store.getters['cart/cartProducts']
        },
        cartProductsLength() {
            return this.cartProducts.length
        },
        loading() {
            return store.getters['cart/loading']
        }
    },
}
</script>

<style scoped>

</style>
