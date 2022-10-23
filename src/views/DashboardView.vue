<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="dashboard">
    <h1>dashboard</h1>
    <div class="row">
        <div class="col-md-3">
            <Card icon="fa-solid fa-cart-shopping" title="Products" :count="productsCount" />
        </div>
        <div class="col-md-3">
            <Card icon="fa-brands fa-shopify" title="Orders" :count="ordersCount" />
        </div>
        <div class="col-md-3">
            <Card icon="fa-solid fa-users" title="Users" :count="usersCount" />
        </div>
        <div class="col-md-3">
            <Card icon="fa-solid fa-dollar-sign" title="Income" :count="income + 'DH'" />
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '@/components/sidebar/SideBar.vue'
import {
    sidebarWidth
} from '@/components/sidebar/sidebarState'
import axiosInstance from '@/axios'
import Card from '../components/Card'

export default {
    components: {
        Sidebar,
        Card
    },
    data() {
        return {
            sidebarWidth,
            ordersCount: '',
            productsCount: '',
            usersCount: '',
            income: ''
        }
    },
    mounted() {
        this.getTotalCount()
    },
    methods: {
        async getTotalCount() {
            const response = await axiosInstance.get('/statistics')
            this.ordersCount = response.data.ordersCount
            this.productsCount = response.data.productsCount
            this.usersCount = response.data.usersCount
            this.income = response.data.income
        },
    },
}
</script>

<style scoped>
.dashboard {
    padding: 20px;
    transition: 0.3s ease;
}
</style>
