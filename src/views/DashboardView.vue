<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="dashboard">
    <h1>dashboard</h1>
</div>
</template>

<script>
import Sidebar from '@/components/sidebar/SideBar.vue'
import {
    sidebarWidth
} from '@/components/sidebar/sidebarState'

export default {
    components: {
        Sidebar,
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
