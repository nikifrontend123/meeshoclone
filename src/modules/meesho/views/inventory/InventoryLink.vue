<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly overflow-x-scroll"
            style="font-size: 14px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="currentRouteName('Inventory-Active') ? 'active' : ''"
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
    methods: {
        currentRouteName(routeName) {
            return this.$route.name.includes(routeName);
        }

    }
}
</script>