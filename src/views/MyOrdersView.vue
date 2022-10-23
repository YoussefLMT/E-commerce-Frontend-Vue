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
import Circle from 'vue-loading-spinner/src/components/Circle'

export default {
    components: {
        Navbar,
        Footer,
        Circle
    },
    mounted() {
        store.dispatch('orders/getUserOrders')
    },
    computed: {
        userOrders() {
            return store.getters['orders/userOrders']
        },
        loading() {
            return store.getters['orders/loading']
        }
    },
}
</script>

<style scoped>

</style>
