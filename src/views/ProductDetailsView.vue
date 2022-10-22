<template>
<Navbar />

<div class="container">
    <div v-if="loading" class="text-center mb-5">
        <Circle />
    </div>
    <div v-else class="row d-flex justify-content-center">
        <div class="col-md-4">
            <img class="details-img" :src="'http://127.0.0.1:8000/' + product.image">
        </div>
        <div class="col-md-4">
            <router-link to="/">Go Back</router-link><br><br>
            <h5>{{ product.name }}</h5>
            <p><span class="title">Price:</span> {{ product.price }}DH</p>
            <p><span class="title">Description:</span> {{ product.description }}</p>
            <div class="quantity-toggle">
                <button @click="decrement()">&mdash;</button>
                <input type="text" :value="quantity" readonly>
                <button @click="increment()">&#xff0b;</button>
            </div><br>
            <button @click="addTocart" class="btn">Add Product To Cart</button>
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
import axiosInstance from '../axios'
import Swal from 'sweetalert2'

export default {
    components: {
        Navbar,
        Footer,
        Circle
    },
    data() {
        return {
            quantity: 1
        }
    },
    mounted() {
        store.dispatch('productDetails/getProduct', this.$route.params.id)
    },
    computed: {
        product() {
            return store.getters['productDetails/product']
        },
        loading() {
            return store.getters['productDetails/loading']
        }
    },
    methods: {
        increment() {
            this.quantity++
        },

        decrement() {
            if (this.quantity === 1) {
                this.quantity = 1
            } else {
                this.quantity--
            }
        },

        async addTocart() {
            if (!localStorage.getItem('token')) {
                this.$router.push('/login')
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
                Toast.fire({
                    icon: 'error',
                    title: 'Please login first'
                })
            } else {
                const response = await axiosInstance.post(`add-to-cart/${this.$route.params.id}`, {
                    quantity: this.quantity
                })
                if (response.data.status === 406) {
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
                    Toast.fire({
                        icon: 'error',
                        title: response.data.message
                    })
                } else if (response.data.status === 200) {
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
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    })
                }
            }
        }
    }
}
</script>

<style scoped>
/* .footer {
    position: absolute;
    bottom: -180px;
    left: 0;
    right: 0;
} */

.details-img {
    height: 300px;
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
}

.btn:hover {
    background: #C19800;
}

.navbar {
    background-color: blue;
    padding: 45px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px 0px;
}

.container {
    margin-top: 180px;
}

p {
    font-size: 20px;
}

.title {
    font-weight: bold;
}

.quantity-toggle {
    display: flex;
}

.quantity-toggle input {
    border: 0;
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
    width: 2.5rem;
    text-align: center;
    padding: 0 .5rem;
}

.quantity-toggle button {
    border: 0;
    padding: .2rem;
    background: #EAB800;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
}
</style>
