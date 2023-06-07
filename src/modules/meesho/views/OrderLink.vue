<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly overflow-x-scroll"
            style="font-size: 14px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="currentRouteName === 'Order-OnHold' ? 'active' : ''"
                :to="{ name: 'Order-OnHold' }">On Hold</RouterLink>
            <RouterLink class="nav-link " :class="currentRouteName === 'Order-Pending' ? 'active' : ''"
                :to="{ name: 'Order-Pending' }">Pending</RouterLink>
            <!-- <RouterLink class="nav-link " :class="currentRouteName === 'DeliveriesPage' ? 'active' : ''" to="/DeliveriesPage">Ready To Ship</RouterLink>
            <RouterLink class="nav-link " :class="currentRouteName === 'DeliveriesPage' ? 'active' : ''" to="/DeliveriesPage">Shipped</RouterLink>
            <RouterLink class="nav-link " :class="currentRouteName === 'DeliveriesPage' ? 'active' : ''" to="/DeliveriesPage">Cancelled</RouterLink> -->
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active'],
    computed: {
        currentRouteName() {
            return this.$route.name;
        }

    }
}
</script>