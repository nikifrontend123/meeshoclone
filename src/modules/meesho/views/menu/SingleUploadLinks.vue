<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly overflow-x-scroll"
            style="font-size: 14px; font-weight: 500;" id="nav-tab" role="tablist">
            
            <RouterLink class="nav-link " :class="currentRouteName === 'Menu-Single-Upload-All' ? 'active' : ''"
                :to="{ name: 'Menu-Single-Upload-All' }">Add Product</RouterLink>

                <RouterLink class="nav-link " :class="currentRouteName === 'Menu-Single-Upload-Basic' ? 'active' : ''"
                :to="{ name: 'Menu-Single-Upload-Basic' }">Basic Details</RouterLink>
                
                <!-- 
            <RouterLink class="nav-link " :class="currentRouteName === 'Inventory-Active-LowStock' ? 'active' : ''"
                :to="{ name: 'Inventory-Active-LowStock' }">Low Stock</RouterLink> -->
        </div>
    </nav>
</template>

<script>
export default {
    name: 'SubSingleLinks',
    computed: {
        currentRouteName() {
            return this.$route.name;
        }

    }
}
</script>