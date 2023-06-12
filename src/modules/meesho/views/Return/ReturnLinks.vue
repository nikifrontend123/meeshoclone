<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly overflow-x-scroll"
            style="font-size: 14px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="currentRouteName('Return-Overview') ? 'active' : ''"
                :to="{ name: 'Return-Overview' }">Overview</RouterLink>
            <RouterLink class="nav-link " :class="currentRouteName('Return-Tracking') ? 'active' : ''"
                :to="{ name: 'Return-Tracking-Intransit' }">Return Tracking</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    name:'ReturnLinks',
    // props: ['active'],
    methods: {
        currentRouteName(routeName) {
            return this.$route.name.includes(routeName);
        }

    }
}
</script>