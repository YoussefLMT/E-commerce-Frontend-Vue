<template>
<header>
    <nav>
        <div class="logo">
            <a href="/">
                <h2><span class="txt">A</span>B</h2>
            </a>
        </div>
        <ul v-show="!mobile" class="navigation">
            <li>
                <a class="link" href="/">Home</a>
            </li>
            <li>
                <a class="link" href="#">About</a>
            </li>
            <li>
                <a class="link" href="#">shop</a>
            </li>
            <li>
                <a class="link" href="#">Contact</a>
            </li>
        </ul>

        <div class="icon">
            <i @click="toggleNavBar" v-show="mobile" class="fa fa-bars" :class="{'icon-active': mobileNav}"></i>
        </div>

        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
                <li>
                    <a class="link" href="/">Home</a>
                </li>
                <li>
                    <a class="link" href="#">About</a>
                </li>
                <li>
                    <a class="link" href="#">shop</a>
                </li>
                <li>
                    <a class="link" href="#">Contact</a>
                </li>
            </ul>
        </transition>
    </nav>
</header>
</template>

<script>
export default {
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreenWidth)
        this.checkScreenWidth()
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
    }
}
</script>

