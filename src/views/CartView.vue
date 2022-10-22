<template>
<Navbar />

<div class="container mt-5">
    <h3 class="text-center">Walcome in your cart</h3>
    <div v-if="loading" class="text-center mt-5 mb-5">
        <Circle />
    </div>
    <div v-else>
        <div v-if="cartProductsLength === 0" class="empty-cart mt-5">
            <div class="row">
                <div class="col-md-">
                    <img src="@/assets/cart.png">
                    <h3 class="text-center">Your cart is currently empty</h3>
                    <router-link to="/menu" class="btn btn-warning mt-3">Return To Menu</router-link>
                </div>
            </div>
        </div>
        <router-link v-if="cartProductsLength > 0" to="/order" class="btn mt-5">Order Now</router-link><br><br>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4" v-for="cartProduct in cartProducts" :key="cartProduct.id">

                <div class="box">
                    <div class="imgbox">
                        <img :src="'http://127.0.0.1:8000/' + cartProduct.image">
                    </div>
                    <div class="text">
                        <h3>{{ cartProduct.name }}</h3>
                        <p>{{ cartProduct.price}} DH</p>
                        <p>Quantity: {{ cartProduct.quantity}}</p>
                        <button type="button" class="btn">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

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
