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
                    <router-link to="/shop" class="btn btn-warning mt-3">Return To Shop</router-link>
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
                        <button type="button" @click="removeProduct(cartProduct.id)" class="btn">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<Footer />
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer.vue'
import store from '@/store'
import Circle from 'vue-loading-spinner/src/components/Circle'
import axiosInstance from '@/axios'
import Swal from 'sweetalert2'

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
    methods: {
        async removeProduct(id) {
            const response = await axiosInstance.delete(`/remove-product/${id}`)
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            if (response.data.status === 200) {
                Toast.fire({
                    icon: 'success',
                    title: response.data.message
                })
                store.dispatch('cart/getCartProducts')
            } else if (response.data.status === 404) {
                Toast.fire({
                    icon: 'error',
                    title: response.data.message
                })
                store.dispatch('cart/getCartProducts')
            }
        }
    }
}
</script>

<style scoped>
.box {
    width: 250px;
    margin: 20px;
    border: 15px solid #fff;
    box-shadow: 0 5px 35px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
}

.box:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.box .imgbox {
    position: relative;
    width: 100%;
    height: 180px;
}

.imgbox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.box .text {
    padding: 10px 0 0px;
    text-align: center;
}

.box .text p {
    color: #EAB800;
    font-weight: 500;
}

.btn {
    font-size: 13px;
    font-weight: 600;
    border-radius: 7px;
    color: #fff;
    background: #EAB800;
    display: inline-block;
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    border: 0;
}

.btn:hover {
    background: #C19800;
}

.empty-cart {
    width: 250px;
    margin: 0 auto;
}

.empty-cart img {
    width: 100%;
}
</style>
