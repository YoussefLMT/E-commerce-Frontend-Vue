<template>
<Navbar />

<div class="auth-content">
    <form>
        <h2 class="form-title">Login</h2>
        <div>
            <label>Email</label>
            <input type="email" class="text-input">
        </div>
        <div>
            <label>Password</label>
            <input type="password" class="text-input">
        </div>
        <div>
            <button type="button" class="btn btn-big">Login</button>
        </div>
        <p>Or <router-link to="/register">Register</router-link>
        </p>
    </form>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    components: {
        Navbar
    },
    data() {
        return {
            userData: {
                email: '',
                password: ''
            },
            errors: ''
        }
    },
}
</script>

<style scoped>
.auth-content {
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.auth-content .form-title {
    text-align: center;
    margin-bottom: 20px;
}

.auth-content form div {
    margin-bottom: 10px;
}

.auth-content form p {
    text-align: center;
}

.auth-content form p a {
    text-decoration: underline;
}

.text-input {
    padding: 10px 10px;
    display: block;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    outline: none;
    color: #444;
    font-size: 18px;
}

.text-input:focus {
    border: 3px solid #006669;
}

.btn {
    padding: 10px 5px;
    background: #3498db;
    color: white;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}

.btn-big {
    padding: 10px 10px;
}

.btn:hover {
    color: white;
    background: #005255;
}

@media (max-width: 600px) {
    .auth-content {
        width: 80%;
    }
}
</style>