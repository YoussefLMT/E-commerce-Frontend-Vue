<template>
<Navbar />

<div class="auth-content">
    <form>
        <h2 class="form-title">Register</h2>
        <div>
            <label>Name</label>
            <input type="text" class="text-input">
        </div>
        <div>
            <label>Email</label>
            <input type="email" class="text-input">
        </div>
        <div>
            <label>Password</label>
            <input type="password" class="text-input">
        </div>
        <div>
            <button type="button" class="btn btn-big">Register</button>
        </div>
        <p>Or <router-link to="/login">Login</router-link>
        </p>
    </form>
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
