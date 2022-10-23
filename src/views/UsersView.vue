<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="users">
    <h1>Users</h1>

    <div class="card us" style="width: 900px;">
        <div class="card-header">
            Users Managment

            <!-- Button trigger add user modal -->
            <button type="button" class="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addUserModal">
                Add User
            </button>
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
                 <div v-if="loading" class="spinner">
                    <h3>Loading...</h3>
                </div>
                <tbody v-else>
                    <tr v-for="user in users" :key="user.id">
                        <th scope="row">{{ user.id }}</th>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.role }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!--Add User Modal -->
    <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" v-model="user.name">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" v-model="user.email">
                        </div>
                        <div class="mb-3">
                            <label for="passowrd" class="form-label">Password</label>
                            <input type="passowrd" class="form-control" id="passowrd" v-model="user.password">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Role</label>
                            <select class="form-select" v-model="user.role">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
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

export default {
    components: {
        Sidebar,
    },
    data() {
        return {
            sidebarWidth,
            user: {
                name: '',
                email: '',
                password: '',
                role: '',
            },
            errors: '',
        }
    },
    mounted() {
        store.dispatch('users/getUsers')
    },
    computed: {
        users() {
            return store.getters['users/users']
        },
        loading() {
            return store.getters['users/loading']
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
