<template>
<Navbar />

<div class="container">
    <div class="row">
        <div class="contact">
            <h2 class="text-center mb-3">Contact us</h2>
            <p>If you have any questions, do not hesitate to ask them.</p>
            <i class="fa fa-map-marker w3-text-blue mb-2" style="width: 30px"></i>
            Chicago, US<br>
            <i class="fa fa-phone w3-text-blue mb-2" style="width: 30px"></i>
            Phone: +00 151515<br><i class="fa fa-envelope w3-text-blue mb-3" style="width: 30px"> </i>
            Email: mail@mail.com<br>
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" aria-label="With textarea" id="message"></textarea>
                </div>
                <button class="btn" type="button">SEND MESSAGE</button>
            </form>
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

</style>
