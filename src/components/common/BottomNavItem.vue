<template>
    <div>
        <RouterLink :to="{ name: menuItem.route }" :class="{ 'text-danger': currentRoute === menuItem.route }">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <i class="fs-4" :class="menuItem.icon"></i>
                <small class="mt-1 text-uppercase">{{ menuItem.name }}</small>
            </div>
        </RouterLink>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "BottomNavItem",
    props: ["menuItem"],
    components: { RouterLink },
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    }
     
}
</script>
<style scoped>
 
</style>
