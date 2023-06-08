<template>
    <div>
        <ReturnLinks></ReturnLinks>
        <TrackingLinks></TrackingLinks>
        <h1>DeliveredPage</h1>
    </div>
</template>

<script>
import ReturnLinks from './ReturnLinks.vue';
import TrackingLinks from './TrackingLinks.vue';

    export default {
    name: "DeliveredPage",
    components: { ReturnLinks, TrackingLinks }
}
</script>

<style lang="scss" scoped>

</style>