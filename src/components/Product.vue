<template>
<div class="box">
    <div class="imgbox">
        <img :src="image">
    </div>
    <div class="text">
        <h3>{{ name }}</h3>
        <p>{{ price }} DH</p>
        <router-link :to="{ name: 'mealDetails', params: {id: id }}" class="btn-show">Show</router-link>
    </div>
</div>
</template>

<script>
export default {
    props: ['image', 'name', 'price', 'id'],
}
</script>