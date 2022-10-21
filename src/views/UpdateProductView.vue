<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="products">
    <h1>Update Product</h1>

    <div class="card pr" style="width: 800px;">
        <div class="card-header">
            Products Managment
        </div>
        <div class="card-body">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="product.name">
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <input type="text" class="form-control" id="price" v-model="product.price">
                </div>
                <div class="mb-3">
                    <label for="quantity" class="form-label">Quantity</label>
                    <input type="text" class="form-control" id="quantity" v-model="product.quantity">
                </div>
                <div class="mb-3">
                    <label for="quantity" class="form-label">Category</label>
                    <select class="form-select" v-model="product.category">
                        <option value="tshirt">T-shirt</option>
                        <option value="jacket">Jacket</option>
                        <option value="pants">Pants</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3" v-model="product.description"></textarea>
                </div>
                <button type="button" @click="updateProduct" class="btn btn-primary">Update Product</button>
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
import Swal from 'sweetalert2'

export default {
    components: {
        Sidebar,
    },
    data() {
        return {
            sidebarWidth,
            product: {
                name: '',
                price: '',
                quantity: '',
                category: '',
                description: '',
                image: ''
            },
            errors: '',
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        async getProduct() {
            try {
                const response = await axiosInstance.get(`/get-product/${this.$route.params.id}`)
                this.product = response.data.product
            } catch (error) {
                console.log(error)
            }
        },

        async updateProduct() {
            try {
                const response = await axiosInstance.put(`/update-product/${this.$route.params.id}`, this.meal)
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
                } else if (response.data.status === 422) {
                    this.errors = response.data.validation_err
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
}
</script>

<style scoped>
.products {
    padding: 20px;
    transition: 0.3s ease;
}

.pr {
    margin: 50px auto;
}
</style>
