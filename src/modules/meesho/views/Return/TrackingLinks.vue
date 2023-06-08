<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly overflow-x-scroll"
            style="font-size: 12px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="currentRouteName === 'Return-Tracking-Intransit' ? 'active' : ''"
                :to="{ name: 'Return-Tracking-Intransit' }">In Transit</RouterLink>

             <RouterLink class="nav-link " :class="currentRouteName === 'Return-Tracking-Outfordelivery' ? 'active' : ''"
                :to="{ name: 'Return-Tracking-Outfordelivery' }">Out for Delivery</RouterLink>

            <RouterLink class="nav-link " :class="currentRouteName === 'Return-Tracking-Delivered' ? 'active' : ''"
                :to="{ name: 'Return-Tracking-Delivered' }">Delivered</RouterLink>

            <RouterLink class="nav-link " :class="currentRouteName === 'Return-Tracking-Lost' ? 'active' : ''"
                :to="{ name: 'Return-Tracking-Lost' }">Lost</RouterLink> 
        </div>
    </nav>
</template>

<script>
export default {
    name:'ReturnLinks',
    // props: ['active'],
    computed: {
        currentRouteName() {
            return this.$route.name;
        }

    }
}
</script>