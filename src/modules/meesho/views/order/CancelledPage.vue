<template>
    <div>
        <OrderLink></OrderLink>
        <h1>Cancelled</h1>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/common/BottomNav.vue';
import OrderLink from './OrderLink.vue';

    export default {
    name: "CancelledPage",
    components: { OrderLink, BottomNav }
}
</script>

<style lang="scss" scoped>

</style>