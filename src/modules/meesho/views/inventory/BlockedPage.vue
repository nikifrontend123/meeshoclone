<template>
    <div>
        <InventoryLink></InventoryLink>
        <div class="d-flex justify-content-evenly bg-light p-2">
            <button class="btn btn-dark rounded-0">Duplicate</button>
            <button class="btn btn-dark rounded-0">Poor Quality</button>
            <button class="btn btn-dark rounded-0">Others</button>
        </div>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import InventoryLink from './InventoryLink.vue';
import BottomNav from '@/components/common/BottomNav.vue';

export default {
    components: { InventoryLink, BottomNav }
}
</script>

<style lang="scss" scoped></style>