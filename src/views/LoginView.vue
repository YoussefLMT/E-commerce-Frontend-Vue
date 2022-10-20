<template>
<Navbar />

<div class="auth-content">
    <form>
        <h2 class="form-title">Login</h2>
        <div>
            <label>Email</label>
            <input type="email" v-model="userData.email" class="text-input">
            <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
        </div>
        <div>
            <label>Password</label>
            <input type="password" v-model="userData.password" class="text-input">
            <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
        </div>
        <div>
            <button type="button" @click="login" class="btn btn-big">Login</button>
        </div>
        <p>Or <router-link to="/register">Register</router-link>
        </p>
    </form>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import axiosInstance from '@/axios'
import Swal from 'sweetalert2'

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
    methods: {
        async login() {
            try {
                const response = await axiosInstance.post("/login", this.userData)
                if (response.data.status === 401) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    })
                } else if (response.data.role === 'user') {
                    this.$router.push('/')
                    console.log('user')
                    store.commit('auth/setUserRole', response.data.role)
                    store.commit('auth/setUserToken', response.data.token)
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('role', response.data.role)
                } else if (response.data.role === 'admin') {
                    this.$router.push('/dashboard')
                    console.log('admin')
                    store.commit('auth/setUserRole', response.data.role)
                    store.commit('auth/setUserToken', response.data.token)
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('role', response.data.role)
                } else {
                    this.errors = response.data.validation_err
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
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
