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

.details-img {
    height: 300px;
}

btn:hover {
    background: hsl(6, 84%, 34%);
    border: none;
}

.navbar {
    background-color: blue;
    padding: 45px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px 0px;
}

.container {
    margin-top: 80px;
}

p {
    font-size: 20px;
}

.title {
    font-weight: bold;
}

.quantity-toggle {
    display: flex;
}

.quantity-toggle input {
    border: 0;
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
    width: 2.5rem;
    text-align: center;
    padding: 0 .5rem;
}

.quantity-toggle button {
    border: 0;
    padding: .2rem;
    background: #e74c3c;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
}
</style>
