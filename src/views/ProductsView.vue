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
                <tbody>
                    <tr>
                        <th scope="row">3</th>
                        <td>guyg</td>
                        <td>33345</td>
                        <td>ggyuguyguyg</td>
                        <td>ggyuguyguyg</td>
                        <td>gfuegfy</td>
                        <td><img src="http://127.0.0.1:8000/"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!--Add Product Modal -->
    <div class="modal fade" id="addMealModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="fname" class="form-label">Name</label>
                            <input type="text" class="form-control" id="fname" >
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="text" class="form-control" id="price" >
                        </div>
                         <div class="mb-3">
                            <label for="quantity" class="form-label">Quantity</label>
                            <input type="text" class="form-control" id="quantity" >
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label">Category</label>
                            <select class="form-select">
                                <option value="tshirt">T-shirt</option>
                                <option value="jacket">Jacket</option>
                                <option value="pants">Pants</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input class="form-control" type="file" id="image">
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
