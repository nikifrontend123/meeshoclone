<template>
    <div>
        <OrderLink></OrderLink>
        <h1>ShippedPage</h1>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/common/BottomNav.vue';
import OrderLink from './OrderLink.vue';

export default {
    name: "ShippedPage",
    components: { OrderLink, BottomNav }
}
</script>

<style lang="scss" scoped></style>