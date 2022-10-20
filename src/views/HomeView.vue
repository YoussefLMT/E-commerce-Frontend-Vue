<template>
<Navbar />

<section class="home">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="home-content">
                    <h2><span class="text">Happy</span> Shop</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quas eum quidem natus, veritatis asperiores facere, voluptate consectetur adipisci ea voluptatem tempore deserunt provident fugit eveniet eos enim? Dolorem, atque.</p>
                    <button type="button" class="btn btn-primary">Shop Now</button>
                </div>
            </div>

            <div class="col-md-4">
                <div class="image d-none d-sm-block">
                    <img src="@/assets/undraw_shopping_app_flsj.svg">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="features">
    <div class="title">
        <h2 class="title-txt">Our <span>Features</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="content">
        
    </div>
</section>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    components: {
        Navbar
    }
}
</script>

<style scoped>
.image {
    width: 500px;
    margin-top: 170px;
    margin-left: 280px;
}

.image img {
    width: 100%;
}

.home-content {
    margin-top: 230px;
    margin-left: 60px;
}

.home-content h2 {
    font-weight: bold;
    font-size: 45px;
}

.home-content .text {
    color: blue;
}

.home-content p {
    font-weight: 500;
    margin-top: 30px;
    font-size: 18px;
}

.home-content .btn {
    margin-top: 10px;
    font-weight: 500;
}

.home-content .btn:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

@media only screen and (max-width: 800px) {

    .home-content {
        margin-top: 120px;
        margin-left: 0px;
        text-align: center;
    }

    .home-content h2 {
        font-weight: 600;
        font-size: 35px;
    }

    .home-content p {
        font-size: 17px;
    }

    .btn {
        margin-top: 10px;
    }
}
</style>
