<template>
    <nav>
        <div class="nav nav-tabs py-2 d-flex overflow-x-scroll flex-nowrap ws-nowarp align-items-center"
            style="font-size: 12px; font-weight: 500;" id="nav-tab" role="tablist" ref="navTabs">
            <RouterLink v-for="(link, index) in links" :key="index" class="nav-link ws-nowarp"
                :class="currentRouteName === link.route ? 'active' : ''" :to="{ name: link.route }">
                {{ link.label }}
            </RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active'],
    data() {
        return {
            links: [
                { route: 'Order-OnHold', label: 'On Hold' },
                { route: 'Order-Pending', label: 'Pending' },
                { route: 'Order-ReadyToShip', label: 'Ready To Ship' },
                { route: 'Order-Shipped', label: 'Shipped' },
                { route: 'Order-Cancelled', label: 'Cancelled' },
            ]
        }
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        }

    },
    
}
</script>

<style >
.ws-nowarp {
    white-space: nowrap;
}
</style>