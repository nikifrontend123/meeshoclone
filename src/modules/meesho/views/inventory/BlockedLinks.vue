<template>
    <div>
        <nav>
            <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly overflow-x-scroll"
                style="font-size: 14px; font-weight: 500;" id="nav-tab" role="tablist">
                <RouterLink class="nav-link " :class="currentRouteName === 'Inventory-Blocked-Duplicate' ? 'active' : ''"
                    :to="{ name: 'Inventory-Blocked-Duplicate' }">Duplicate</RouterLink>
                <RouterLink class="nav-link " :class="currentRouteName === 'Inventory-Blocked-PoorQuality' ? 'active' : ''"
                    :to="{ name: 'Inventory-Blocked-PoorQuality' }">Poor Quality</RouterLink>
                <RouterLink class="nav-link " :class="currentRouteName === 'Inventory-Blocked-Other' ? 'active' : ''"
                    :to="{ name: 'Inventory-Blocked-Other' }">Others</RouterLink>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'BlockedLinks',
    computed: {
        currentRouteName() {
            return this.$route.name;
        }

    }
}
</script>

<style lang="scss" scoped></style>