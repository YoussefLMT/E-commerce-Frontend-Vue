<template>
<Navbar />

<div class="shop">
    <div class="container">
        <div class="row">
            <div class="col-md-4 mx-auto mt-3">
                <label for="category" class="form-label">Select a category</label>
                <select class="form-select" v-model="category" @change="onChange" id="category">
                    <option value="all">All</option>
                    <option value="tshirt">T-shirt</option>
                    <option value="jacket">Jacket</option>
                    <option value="pants">Pants</option>
                </select>
            </div>
        </div>
    </div>

    <div v-if="productsCategoryLength === 0 && category != 'all'">
        <h5 class="text-center mt-3">There is no product in this category</h5>
    </div>

    <div v-if="loading" class="text-center mt-5 mb-5">
        <Circle />
    </div>
    <div v-else-if="category === 'all'" class="content">
        <Product v-for="product in products" :key="product.id" :image="'http://127.0.0.1:8000/' + product.image" :name="product.name" :price="product.price" :id="product.id" />
    </div>
    <div v-else-if="productsCategory" class="content">
        <Product v-for="product in productsCategory" :key="product.id" :image="'http://127.0.0.1:8000/' + product.image" :name="product.name" :price="product.price" :id="product.id" />
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
        productsCategoryLength() {
            return this.productsCategory.length
        }
    },
    methods: {
        async getProductsByCategory() {
            const response = await axiosInstance.get(`products-category/${this.category}`)
            this.productsCategory = response.data.products
        },

        onChange() {
            this.getProductsByCategory()
        }
    },
}
</script>

<style scoped>
.shop {
    margin-top: 150px;
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
