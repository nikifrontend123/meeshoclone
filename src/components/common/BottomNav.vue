<template>
    <div class="position-fixed bottom-0 start-0 end-0 bg-light shadow"
        style="height: fit-content">
        <div class="d-flex justify-content-around py-1">
            <BottomNavItem v-for="(menuItem, index) in menuItems" :key="index" :menuItem="menuItem"></BottomNavItem>
        </div>
    </div>
</template>

<script>
import BottomNavItem from './BottomNavItem.vue';

export default {
    components: {
        BottomNavItem,

    },
    computed: {
        menuItems() {
            return this.$store.getters['meesho/getBottomNavMenuItems']
        },

    },
    

}
</script>
