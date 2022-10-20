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
