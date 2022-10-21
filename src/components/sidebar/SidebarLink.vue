<template>
<router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
        <span v-if="!collapsed">
            <slot />
        </span>
    </transition>
</router-link>
</template>