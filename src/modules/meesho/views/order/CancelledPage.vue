<template>
    <div>
        <div class="d-flex justify-content-between container p-2">
            <b>Order/Cancelled</b>
            <b><i class="bi bi-search"></i><i class="bi bi-question-circle ms-2"></i></b>
        </div>
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

<style lang="scss" scoped></style>