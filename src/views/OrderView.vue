<template>
<Navbar />

<div class="container">
    <div class="row">
        <div class="col-6 mx-auto">
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="col">Total Amount</th>
                        <td>34534534 DH</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-6 mt-5 mx-auto order-form">
            <form>
                <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address" v-model="address">
                </div>
                <div class="mb-3">
                    <label for="city" class="form-label">City</label>
                    <input type="text" class="form-control" id="city" v-model="city">
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input type="text" class="form-control" id="phone" v-model="phone">
                </div>
                <button type="button" @click="placeOrder" class="btn">Order</button>
            </form>
        </div>
    </div>
</div>

<div class="footer">
    <Footer />
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer.vue'
import axiosInstance from '@/axios'

export default {
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            total_amount: '',
            address: '',
            city: '',
            phone: ''
        }
    },
    mounted() {
        this.getOrderTotalPrice()
    },
    methods: {
        async getOrderTotalPrice() {
            const response = await axiosInstance.get('/total-price')
            this.total_amount = response.data.total_price
        },
    },
}
</script>

<style scoped>
.container {
    margin-top: 150px;
}

.order-form {
    padding: 50px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.btn {
    font-size: 13px;
    font-weight: 600;
    border-radius: 7px;
    color: #fff;
    background: #EAB800;
    display: inline-block;
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    border: 0;
}

.btn:hover {
    background: #C19800;
}
</style>
