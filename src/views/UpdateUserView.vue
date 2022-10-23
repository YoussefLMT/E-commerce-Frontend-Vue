<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="users">
    <h1>Users</h1>
   
</div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
import {
    sidebarWidth
} from '@/components/sidebarState'

export default {
    components: {
        Sidebar
    },
    data() {
        return {
            sidebarWidth,
        }
    },
}
</script>

<style scoped>
.users {
    padding: 20px;
    transition: 0.3s ease;
}
.us {
    margin: 50px auto;
}
</style>