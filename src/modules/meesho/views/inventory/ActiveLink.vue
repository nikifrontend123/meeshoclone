<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly overflow-x-scroll"
            style="font-size: 14px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="currentRouteName === 'Inventory-Active-Stock' ? 'active' : ''"
                :to="{ name: 'Inventory-Active-Stock' }">All Stock</RouterLink>
            <RouterLink class="nav-link " :class="currentRouteName === 'Inventory-Active-OutOfStock' ? 'active' : ''"
                :to="{ name: 'Inventory-Active-OutOfStock' }">Out of Stock</RouterLink>
            <RouterLink class="nav-link " :class="currentRouteName === 'Inventory-Active-LowStock' ? 'active' : ''"
                :to="{ name: 'Inventory-Active-LowStock' }">Low Stock</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'InventoryLinks',
    computed: {
        currentRouteName() {
            return this.$route.name;
        }

    }
}
</script>