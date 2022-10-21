<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="products">
    <h1>Products</h1>

    <div class="card pr" style="width: 1100px;">
        <div class="card-header">
            Products Managment

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
