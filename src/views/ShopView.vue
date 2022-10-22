<template>
<Navbar />

<div class="shop">
    <div v-if="loading" class="text-center mt-5 mb-5">
        <Circle />
    </div>
    <div v-else class="content">
        <Product v-for="product in products" :key="product.id" :image="'http://127.0.0.1:8000/' + product.image" :name="product.name" :price="product.price" :id="product.id" />
    </div>
</div>

<Footer />
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer.vue'
import store from '@/store'
import Circle from 'vue-loading-spinner/src/components/Circle'
import Product from '@/components/Product.vue'
import axiosInstance from '@/axios'

export default {
    components: {
        Navbar,
        Footer,
        Circle,
        Product
    },
    data() {
        return {
            category: 'all',
            productsCategory: []
        }
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
    methods: {
        async getProductsByCategory() {
            const response = await axiosInstance.get(`products-category/${this.category}`)
            this.productsCategory = response.data.products
        },
    },
}
</script>

<style scoped>
.shop {
    margin-top: 200px;
    padding: 0px 100px;
}

.shop .content {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 40px;
}

@media only screen and (max-width: 800px) {

    .shop {
        margin-top: 100px;
        padding: 0px 20px;
    }
}
</style>
