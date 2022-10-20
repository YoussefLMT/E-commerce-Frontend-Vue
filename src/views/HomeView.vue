<template>
<Navbar />

<div class="home">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="home-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quas eum quidem natus, veritatis asperiores facere, voluptate consectetur adipisci ea voluptatem tempore deserunt provident fugit eveniet eos enim? Dolorem, atque.</p>
                    <button type="button" class="btn btn-primary">Shop Now</button>
                </div>
            </div>

            <div class="col-md-4">
                <div class="image d-none d-sm-block">
                    <img src="@/assets/logo.png">
                </div>
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
    }
}
</script>
