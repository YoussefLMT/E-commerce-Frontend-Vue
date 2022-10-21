<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="products">
    <h1>Products</h1>
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
        }
    },
}
</script>

<style scoped>
.products {
    padding: 20px;
    transition: 0.3s ease;
}
</style>
