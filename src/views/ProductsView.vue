<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="products">
    <h1>Products</h1>

    <div class="card pr" style="width: 1100px;">
        <div class="card-header">
            Products Managment

            <!-- Button trigger add products modal -->
            <button type="button" class="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addProductModal">
                Add Product
            </button>
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">quantity</th>
                        <th scope="col">category</th>
                        <th scope="col">description</th>
                        <th scope="col">image</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <div v-if="loading">
                    <h3>Loading...</h3>
                </div>
                <tbody v-else>
                    <tr v-for="product in products" :key="product.id">
                        <th scope="row">{{ product.id }}</th>
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.description }}</td>
                        <td><img :src="'http://127.0.0.1:8000/' + product.image"></td>
                        <td>
                            <button type="button" @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
                            <router-link :to="{ name: 'updateProduct', params: {id: product.id }}" class="btn btn-warning">Update</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!--Add Product Modal -->
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <input type="text" class="form-control" id="name" v-model="product.name">
                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="text" class="form-control" id="price" v-model="product.price">
                            <span class="text-danger" v-if="errors.price">{{ errors.price[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label">Quantity</label>
                            <input type="text" class="form-control" id="quantity" v-model="product.quantity">
                            <span class="text-danger" v-if="errors.quantity">{{ errors.quantity[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label">Category</label>
                            <select class="form-select" v-model="product.category">
                                <option value="tshirt">T-shirt</option>
                                <option value="jacket">Jacket</option>
                                <option value="pants">Pants</option>
                            </select>
                            <span class="text-danger" v-if="errors.category">{{ errors.category[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="3" v-model="product.description"></textarea>
                            <span class="text-danger" v-if="errors.description">{{ errors.description[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input class="form-control" @change="onFileSelected" type="file" id="image">
                            <span class="text-danger" v-if="errors.image">{{ errors.image[0] }}</span>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" @click="addNewProduct" class="btn btn-primary">Save changes</button>
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
import axiosInstance from '../axios'
import Swal from 'sweetalert2'
import store from '@/store'

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
        store.dispatch('products/getProducts')
    },
    computed: {
        products() {
            return store.getters['products/products']
        },
        loading() {
            return store.getters['products/loading']
        }
    },
    methods: {
        onFileSelected(e) {
            this.product.image = e.target.files[0]
        },

        async addNewProduct() {
            const data = new FormData()
            data.append('name', this.product.name)
            data.append('price', this.product.price)
            data.append('quantity', this.product.quantity)
            data.append('category', this.product.category)
            data.append('description', this.product.description)
            data.append('image', this.product.image)
            try {
                const response = await axiosInstance.post("/add-product", data)
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

                    store.dispatch('products/getProducts')
                } else {
                    this.errors = response.data.validation_err
                }
                this.product.name = ''
                this.product.price = ''
                this.product.quantity = ''
                this.product.category = ''
                this.product.description = ''
            } catch (error) {
                console.log(error)
            }
        },

        async deleteProduct(id) {
            try {
                const response = await axiosInstance.delete(`/delete-product/${id}`)
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

                store.dispatch('products/getProducts')
            } catch (error) {
                console.log(error)
            }
        }
    }
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

img {
    width: 50px;
}

.btn-add {
    float: right
}
</style>
