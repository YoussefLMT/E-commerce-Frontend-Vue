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
        <Feature :image="image1" name="Cool Products" description="Lorem ipsum dolor sit amet consectetur adipisicing" />
        <Feature :image="image2" name="Free Delivery" description="Lorem ipsum dolor sit amet consectetur adipisicing" />
        <Feature :image="image3" name="Cash On Delivery" description="Lorem ipsum dolor sit amet consectetur adipisicing" />
    </div>
</section>
</template>

<script>
import Navbar from '@/components/Navbar'
import Feature from '@/components/Feature.vue'
import image1 from '@/assets/brand-identity.png'
import image2 from '@/assets/delivery.png'
import image3 from '@/assets/cash-on-delivery.png'

export default {
    components: {
        Navbar,
        Feature
    },
    data() {
        return {
            image1,
            image2,
            image3,
        }
    },
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
    color: #EAB800;
}

.home-content p {
    font-weight: 500;
    margin-top: 30px;
    font-size: 18px;
}

.home-content .btn {
    margin-top: 10px;
    font-weight: 500;
    background: #EAB800;
    border: none;
}

.home-content .btn:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.title-txt {
    color: #111;
    font-size: 40px;
    font-weight: 500;
}

.title-txt span {
    color: #EAB800;
    font-weight: 700;
}

.title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.features {
    padding: 200px 100px;
}

.features .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 40px;
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
