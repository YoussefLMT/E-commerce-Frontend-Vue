<template>
<div class="box">
    <div class="imgbox">
        <img :src="image">
    </div>
    <div class="text">
        <h3>{{ name }}</h3>
    </div>
</div>
</template>

<script>
export default {
    props: ['image', 'name'],
}
</script>

<style scoped>
.box {
    width: 230px;
    margin: 15px;
    border: 15px solid #fff;
    box-shadow: 0 5px 35px rgba(0, 0, 0, 0.2);
}

.box:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.box .imgbox {
    position: relative;
    width: 100%;
    height: 180px;
}

.box .imgbox img {
    width: 100%;
    height: 100%;
}

.box .text {
    padding: 15px 0 0;
    text-align: center;
}
</style>
