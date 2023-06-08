<template>
    <div>
        <InventoryLink></InventoryLink>
        <ActiveLink></ActiveLink>
        <div class="d-flex justify-content-center w-100">
        <button class="btn btn-light w-100  border">Sort</button>
        <button class="btn btn-light w-100  border">Filter</button>
       </div>
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