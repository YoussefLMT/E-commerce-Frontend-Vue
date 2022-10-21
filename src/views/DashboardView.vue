<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="dashboard">
    <h1>dashboard</h1>
</div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
import {
    sidebarWidth
} from '@/components/sidebarState'

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

</style>
