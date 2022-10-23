<template>
<Navbar />

<div class="container mt-5">
    <h3 class="text-center">My Orders</h3><br><br>
    <div v-if="loading" class="text-center mb-5">
        <Circle />
    </div>
    <div class="row" v-else v-for="order in userOrders" :key="order.id">
        <div class="col-sm-3">
            <div class="box">
                <div class="imgbox">
                    <img :src="'http://127.0.0.1:8000/' + order.image">
                </div>
                <div class="text">
                    <h3>{{ order.name }}</h3>
                    <p>{{ order.price}} DH</p>
                    <p>Quantity: {{ order.product_quantity}}</p>
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
</style>
