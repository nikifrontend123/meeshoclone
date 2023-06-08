<template>
    <div>
        <InventoryLink></InventoryLink>
        <ActiveLink></ActiveLink>
       
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/common/BottomNav.vue';
import ActiveLink from './ActiveLink.vue';
import InventoryLink from './InventoryLink.vue';

export default {
    components: { InventoryLink, ActiveLink, BottomNav }
}
</script>

<style lang="scss" scoped></style>