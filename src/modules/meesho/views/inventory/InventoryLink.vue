<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly overflow-x-scroll flex-nowrap ws-nowarp"
            style="font-size: 14px; font-weight: 500;" id="nav-tab" role="tablist">

            <!-- <RouterLink v-for="(link, index) in links" :key="index" class="nav-link ws-nowarp"
                :class="currentRouteName === link.route ? 'active' : ''" :to="{ name: link.route }">
                {{ link.label }}
            </RouterLink> -->


            <RouterLink class="nav-link ws-nowarp " :class="currentRouteName('Inventory-Active') ? 'active' : ''"
                :to="{ name: 'Inventory-Active-Stock' }">Active</RouterLink>
            <RouterLink class="nav-link " :class="currentRouteName('Inventory-Pending') ? 'active' : ''"
                :to="{ name: 'Inventory-Pending' }">Active Pending</RouterLink>
            <RouterLink class="nav-link " :class="currentRouteName('Inventory-Blocked') ? 'active' : ''"
                :to="{ name: 'Inventory-Blocked-Duplicate' }">Blocked</RouterLink>
            <RouterLink class="nav-link " :class="currentRouteName('Inventory-Paused') ? 'active' : ''"
                :to="{ name: 'Inventory-Paused' }">Paused</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'InventoryLinks',
    data() {
        return {
            links: [
                { route: 'Inventory-Active-Stock', label: 'Active' },
                { route: 'Inventory-Pending', label: 'InventoryPending' },
                // { route: '', label: '' },
                // { route: '', label: '' },
            ]
        }
    },
    methods: {
        currentRouteName(routeName) {
            return this.$route.name.includes(routeName);
        }

    }
}
</script>