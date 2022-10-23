<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="users">
    <h1>Users</h1>

    <div class="card us" style="width: 900px;">
        <div class="card-header">
            Users Managment

        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">6</th>
                        <td>gygyg</td>
                        <td>yuff</td>
                        <td>gyug</td>
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
.users {
    padding: 20px;
    transition: 0.3s ease;
}

.us {
    margin: 50px auto;
}

.btn-add {
    float: right
}
</style>
