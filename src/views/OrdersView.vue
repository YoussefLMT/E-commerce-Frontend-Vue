<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="orders">
    <h1>Orders</h1>

</div>
</template>

<script>
import Sidebar from '@/components/sidebar/SideBar.vue'
import {
    sidebarWidth
} from '@/components/sidebar/sidebarState'
import store from '@/store'

export default {
    components: {
        Sidebar
    },
    data() {
        return {
            sidebarWidth,
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
}
</script>

<style scoped>
.orders {
    padding: 20px;
    transition: 0.3s ease;
}

.me {
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
