<template>
<div id="root">
    <div class="container mt-4">
        <div class="c-dashboardInfo">
            <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"><i :class="icon"></i>{{ title }}</h4><span class="hind-font caption-12 c-dashboardInfo__count">{{ count }}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['title', 'count', 'icon'],
}
</script>
