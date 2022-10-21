<template>
<div class="sidebar" :style="{ width: sidebarWidth }">

    <div class="links">

    </div>

    <button @click="logOut" class="logout-btn">Log Out</button>

    <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
        <i class="fas fa-angle-double-left" />
    </span>
</div>
</template>

<script>
import SidebarLink from './SidebarLink'
import {
    collapsed,
    toggleSidebar,
    sidebarWidth
} from './sidebarState'

export default {
    props: {},
    components: {
        SidebarLink
    },
    data() {
        return {
            collapsed,
            sidebarWidth
        }
    },
    methods: {
        toggleSidebar,
    },
}
</script>