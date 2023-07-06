<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly overflow-x-scroll flex-nowrap ws-nowarp"
            style="font-size: 14px; font-weight: 500;" id="nav-tab" role="tablist">

            <RouterLink class="nav-link ws-nowarp " :class="currentRouteName('Menu-Bulk-Upload') ? 'active' : ''"
                :to="{ name: 'Menu-Bulk-Upload' }">Bulk Upload</RouterLink>

            <RouterLink class="nav-link " :class="currentRouteName('Menu-Single-Upload') ? 'active' : ''"
                :to="{ name: 'Menu-Single-Upload-All' }">Single Upload</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'MenuLinks',
    methods: {
        currentRouteName(routeName) {
            return this.$route.name.includes(routeName);
        }

    }
}
</script>