<template>
    <div>
        <OrderLink></OrderLink>
        Order Page
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/common/BottomNav.vue';
import OrderLink from './OrderLink.vue';

export default {
    components: { BottomNav, OrderLink }
}
</script>

<style  scoped></style>