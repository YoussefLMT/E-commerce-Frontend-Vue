<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="users">
    <h1>Users</h1>
    <div class="card us" style="width: 800px;">
        <div class="card-header">
            Users Managment
        </div>
        <div class="card-body">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="user.name">
                    <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" v-model="user.email">
                    <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                </div>
                <div class="mb-3">
                    <label for="passowrd" class="form-label">New Password</label>
                    <input type="passowrd" class="form-control" id="passowrd" v-model="user.password">
                </div>
                <div class="mb-3">
                    <label class="form-label">Role</label>
                    <select class="form-select" v-model="user.role">
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                    </select>
                    <span class="text-danger" v-if="errors.role">{{ errors.role[0] }}</span>
                </div>
                <button type="button" @click="updateUser" class="btn btn-primary">Update User</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '@/components/sidebar/SideBar.vue'
import {
    sidebarWidth
} from '@/components/sidebar/sidebarState'
import axiosInstance from '../axios'

export default {
    components: {
        Sidebar
    },
    data() {
        return {
            sidebarWidth,
            user: {
                name: '',
                email: '',
                password: '',
                role: ''
            },
            errors: ''
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        async getUser() {
            try {
                const response = await axiosInstance.get(`/get-user/${this.$route.params.id}`)
                this.user = response.data.user
            } catch (error) {
                console.log(error)
            }
        },
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
