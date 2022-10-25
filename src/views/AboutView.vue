<template>
<Navbar />

<div class="about">
    <div class="row">
        <div class="col50">
            <h1 class="title-txt">About <span>Us</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reprehenderit, aut repellat, dolorem illo, voluptatem minima sapiente praesentium earum possimus nemo debitis est sunt? Cumque minus sit quis aliquam veniam!<br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, deserunt maxime consequuntur dolores quae unde vitae, incidunt quisquam quibusdam voluptates sed iure ad, fugit provident optio nisi praesentium et doloremque? </p>
        </div>
        <div class="col50">
            <div class="imgbox">
                <img src="@/assets/undraw_shopping_app_flsj.svg">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    components: {
        Navbar
    },
}
</script>

<style scoped>
.about {
    padding: 100px;
}

.row {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.row .col50 {
    position: relative;
    width: 48%;
}

.row .col50 .imgbox {
    position: relative;
    width: 100%;
    height: 300px;
}

.row .col50 .imgbox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
