<template>
    <div>
        <ReturnLinks></ReturnLinks>
        iam return page
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/common/BottomNav.vue';
import ReturnLinks from './ReturnLinks.vue';

    export default {
    name: "ReturnPage",
    components: { BottomNav, ReturnLinks }
}
</script>

<style lang="scss" scoped>

</style>