<template>
    <div>
        <ReturnLinks></ReturnLinks>
        <TrackingLinks></TrackingLinks>
        <h1>Iam out for delivery</h1>
    </div>
</template>

<script>
import ReturnLinks from './ReturnLinks.vue';
import TrackingLinks from './TrackingLinks.vue';

    export default {
    name: "OutforDelivery",
    components: { TrackingLinks, ReturnLinks }
}
</script>

<style lang="scss" scoped>

</style>