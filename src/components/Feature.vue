<template>
<div class="box">
    <div class="imgbox">
        <img :src="image">
    </div>
    <div class="text">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
    </div>
</div>
</template>

<script>
export default {
    props: ['image', 'name', 'description'],
}
</script>
