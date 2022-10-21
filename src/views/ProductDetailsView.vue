<template>
<Navbar />

<div>

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
.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
