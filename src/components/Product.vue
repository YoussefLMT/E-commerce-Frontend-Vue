<template>
<div class="box">
    <div class="imgbox">
        <img :src="image">
    </div>
    <div class="text">
        <h3>{{ name }}</h3>
        <p>{{ price }} DH</p>
        <div v-if="Number(quantity) === 0">
            <p>Out Of Stock!</p>
        </div>
        <div v-else>
            <p>Quantity: {{ quantity }}</p>
        </div>
        <router-link :to="{ name: 'productDetails', params: {id: id }}" class="btn-show">Show</router-link>
    </div>
</div>
</template>

<script>
export default {
    props: ['image', 'name', 'price', 'quantity', 'id'],
}
</script>

<style scoped>
.box {
    width: 250px;
    margin: 20px;
    border: 15px solid #fff;
    box-shadow: 0 5px 35px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
}

.box:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.box .imgbox {
    position: relative;
    width: 100%;
    height: 180px;
}

.imgbox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.box .text {
    padding: 10px 0 0px;
    text-align: center;
}

.box .text p {
    color: #EAB800;
    font-weight: 500;
}

.btn-show {
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
}

.btn-show:hover {
    background: #C19800;
    border: none;
}
</style>
