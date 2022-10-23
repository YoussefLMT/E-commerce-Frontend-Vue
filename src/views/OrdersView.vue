<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="orders">
    <h1>Orders</h1>

    <div class="card mt-5 or" style="width: 1100px;">
        <div class="card-header">
            Orders Managment
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">user id</th>
                        <th scope="col">address</th>
                        <th scope="col">city</th>
                        <th scope="col">phone</th>
                        <th scope="col">total amount</th>
                        <th scope="col">status</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <div v-if="loading" class="spinner">
                    <h3>Loading...</h3>
                </div>
                <tbody v-else>
                    <tr v-for="order in orders" :key="order.id">
                        <th scope="row">{{ order.id }}</th>
                        <td>{{ order.user_id }}</td>
                        <td>{{ order.address }}</td>
                        <td>{{ order.city }}</td>
                        <td>{{ order.phone }}</td>
                        <td>{{ order.total_amount }}</td>
                        <td class="badge text-bg-warning mt-2">{{ order.status }}</td>
                        <td>
                            <button type="button" @click="getOrderProducts(order.id)" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#getOrderMeals">Meals</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '@/components/sidebar/SideBar.vue'
import {
    sidebarWidth
} from '@/components/sidebar/sidebarState'
import store from '@/store'
import axiosInstance from '@/axios'

export default {
    components: {
        Sidebar
    },
    data() {
        return {
            sidebarWidth,
            order_products: []
        }
    },
    mounted() {
        store.dispatch('orders/getOrders')
    },
    computed: {
        orders() {
            return store.getters['orders/orders']
        },
        loading() {
            return store.getters['orders/loading']
        }
    },
    methods: {
        async getOrderProducts(id) {
            const response = await axiosInstance.get(`get-order-products/${id}`)
            this.order_products = response.data.order_products
        },
    },
}
</script>

<style scoped>
.orders {
    padding: 20px;
    transition: 0.3s ease;
}

.or {
    margin: 50px auto;
}

img {
    width: 150px;
    margin: 0 auto;
}

.card {
    margin: 0 auto;
}
</style>
