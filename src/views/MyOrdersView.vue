<template>
<Navbar />

<div class="container mt-5">
    <h3 class="text-center">My Orders</h3><br><br>
    <div v-if="loading" class="text-center mb-5">
        <Circle />
    </div>
    <div class="row" v-else v-for="order in userOrders" :key="order.id">
        <div class="col-sm-3">
            <div class="card mb-3" style="width: 18rem;">
                <img class="card-img-top" :src="'http://127.0.0.1:8000/' + order.image">
                <div class="card-body">
                    <h5 class="card-title">{{ order.name }}</h5>
                    <p class="card-text">{{ order.price }} DH</p>
                </div>
            </div>
        </div>
        <div class="col-sm-4 ml-5">
            <p>Address: {{ order.address }}</p>
            <p>City: {{ order.city }}</p>
            <p>Phone: {{ order.phone }}</p>
            <p class="badge tt text-bg-warning">Status: {{ order.status }}</p>
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
