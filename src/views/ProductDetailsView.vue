<template>
<Navbar />

<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-md-4">
            <img class="details-img" src="http://127.0.0.1:8000/">
        </div>
        <div class="col-md-4">
            <router-link to="/">Go Back</router-link><br><br>
            <h5>gyyggyu</h5>
            <p><span class="title">Price:</span> 300DH</p>
            <p><span class="title">Description:</span> gguguguy</p>
            <div class="quantity-toggle">
                <button @click="decrement()">&mdash;</button>
                <input type="text" :value="quantity" readonly>
                <button @click="increment()">&#xff0b;</button>
            </div><br>
            <button class="btn">Add Product To Cart</button>
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

export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

<style scoped>
/* .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
} */
</style>
