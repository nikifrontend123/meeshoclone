<template>
    <div>
        <InventoryLink></InventoryLink>
        <BlockedLinks></BlockedLinks>
        <h1>Other Page</h1>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/common/BottomNav.vue';
import BlockedLinks from './BlockedLinks.vue';
import InventoryLink from './InventoryLink.vue';

export default {
    name: "OtherPage",
    components: { BlockedLinks, BottomNav, InventoryLink }
}
</script>

<style lang="scss" scoped></style>