<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="orders">
    <h1>Update Order Status</h1>
    <div class="card up-order" style="width: 600px;">
        <div class="card-header">
            Orders Management
        </div>
        <div class="card-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <form>
                            <label class="mb-3">Select Status</label>
                            <select class="form-select" v-model="status">
                                <option value="pending">pending</option>
                                <option value="in progress">in progress</option>
                                <option value="shipping">shipping</option>
                                <option value="shipped">shipped</option>
                            </select>
                            <button type="button" @click="updateOrderStatus" class="btn btn-primary mt-3">Save changes</button>
                        </form>
                    </div>
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
import axiosInstance from '@/axios'
import Swal from 'sweetalert2'

export default {
    components: {
        Sidebar
    },
    data() {
        return {
            sidebarWidth,
            status: ''
        }
    },
    methods: {
        async updateOrderStatus() {
            const response = await axiosInstance.put(`/update-order-status/${this.$route.params.id}`, {
                status: this.status
            })
            if (response.data.status === 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: response.data.message
                })
            }
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

.up-order {
    margin: 0 auto;
    margin-top: 100px;
}
</style>
