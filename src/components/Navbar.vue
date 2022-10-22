<template>
<header>
    <nav>
        <div class="logo">
            <router-link to="/">
                <h2><span class="txt">H</span>S</h2>
            </router-link>
        </div>
        <ul v-show="!mobile" class="navigation">
            <li>
                <router-link class="link" to="/">Home</router-link>
            </li>
            <li>
                <router-link class="link" to="#">About</router-link>
            </li>
            <li>
                <router-link class="link" to="#">shop</router-link>
            </li>
            <li>
                <router-link class="link" to="#">Contact</router-link>
            </li>
            <li v-if="this.$store.state.auth.user.role === 'admin'">
                <router-link class="link" to="/dashboard">Dahboard</router-link>
            </li>
            <div v-if="!this.$store.state.auth.user.token" class="d-flex">
                <li>
                    <router-link class="link" to="/login">Login</router-link>
                </li>
                <li>
                    <router-link class="link" to="/register">Register</router-link>
                </li>
            </div>
            <div v-else class="d-flex mt-2">
                <li>
                    <router-link class="link" to="/cart">Cart (0)</router-link>
                </li>
                <li>
                    <router-link class="link" to="/my-orders">My Orders</router-link>
                </li>
                <li>
                    <button type="button" class="btn btn-danger">Log Out</button>
                </li>
            </div>
        </ul>

        <div class="icon">
            <i @click="toggleNavBar" v-show="mobile" class="fa fa-bars" :class="{'icon-active': mobileNav}"></i>
        </div>

        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
                <li>
                    <router-link class="link" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="link" to="#">About</router-link>
                </li>
                <li>
                    <router-link class="link" to="#">shop</router-link>
                </li>
                <li>
                    <router-link class="link" to="#">Contact</router-link>
                </li>
                <li v-if="this.$store.state.auth.user.role === 'admin'">
                    <router-link class="link" to="/dashboard">Dahboard</router-link>
                </li>
                <div v-if="!this.$store.state.auth.user.token" class="d-flex">
                    <li>
                        <router-link class="link" to="/login">Login</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="/register">Register</router-link>
                    </li>
                </div>
                <div v-else>
                    <li>
                        <router-link class="link" to="/cart">Cart (0)</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="/my-orders">My Orders</router-link>
                    </li>
                    <li>
                        <button type="button" class="btn btn-danger">Log Out</button>
                    </li>
                </div>
            </ul>
        </transition>
    </nav>
</header>
</template>

<script>
import axiosInstance from '@/axios'

export default {
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
            cart_count: ''
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreenWidth)
        this.checkScreenWidth()
    },
    mounted() {
        if (localStorage.getItem('token')) {
            this.getCartCount()
        }
    },
    methods: {
        toggleNavBar() {
            this.mobileNav = !this.mobileNav
        },

        checkScreenWidth() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 750) {
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNavfalse = false
            return
        },

        async getCartCount() {
            const response = await axiosInstance.get('/cart-count')
            this.cart_count = response.data.cart_count
        },
    }
}
</script>

<style scoped>
header {
    background: #fff;
    z-index: 99;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: .5s ease all;
    color: white;
}

header nav {
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
}

header nav ul,
.link {
    font-weight: 500;
    color: black;
    list-style: none;
    text-decoration: none;
}

header nav ul li {
    padding: 16px;
    margin-left: 16px;
}

header nav ul .link {
    font-size: 20px;
    transition: .5s ease all;
    padding-bottom: 14px;
    border-bottom: 1px solid transparent;
}

header nav ul .link:hover {
    color: #EAB800;
    border-color: #EAB800;
}

.logo h2 {
    color: black;
    font-weight: 600;
    font-size: 35px;
    cursor: pointer;
}

.logo a {
    text-decoration: none;
}

.logo .txt {
    color: #EAB800;
}

header .logo {
    display: flex;
    align-items: center;
}

header .logo img {
    width: 60px;
}

header .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}

header .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
}

header .icon i {
    cursor: pointer;
    font-size: 24px;
    transition: .8s ease all;
    color: black;
}

header .icon-active {
    transform: rotate(180deg);
}

header .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    max-width: 250px;
    background-color: white;
    top: 0;
    left: 0;
}

header .dropdown-nav li {
    margin-left: 0;
}

header .dropdown-nav li .link {
    color: black;
}

header .mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: .8s ease all;
}

header .mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}

header .mobile-nav-enter-to {
    transform: translateX(0);
}

@media(min-width: 1140px) {
    header nav {
        max-width: 1140px;
    }
}
</style>
