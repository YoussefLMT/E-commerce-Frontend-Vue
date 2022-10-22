<template>
<Navbar />

<div>

</div>

<Footer />
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
        store.dispatch('products/getProducts')
    },
    computed: {
        products() {
            return store.getters['products/products']
        },
        loading() {
            return store.getters['products/loading']
        },
    },
}
</script>

<style scoped>

</style>
