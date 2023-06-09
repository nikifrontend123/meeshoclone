<template>
    <div style="padding-bottom: 80px;">
        <div class="d-flex justify-content-between container p-2">
            <b>Return/RTO Orders</b>
            <b><i class="bi bi-search"></i><i class="bi bi-question-circle ms-2"></i></b>
        </div>
        <div class="d-flex justify-content-between container  py-2 border">
            <b><i class="bi bi-youtube text-danger me-2"></i>Learn how Return/RTO works</b>
            <i class="bi bi-chevron-right ms-2"></i>
        </div>
        <ReturnLinks></ReturnLinks>
        <div class="container py-2 border">
            <p class="lead mb-2 fw-bold">Summary</p>
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col" v-for="(returnSummary, index) in returnSummries" :key="index">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text text-uppercase text-secondary mb-0" style="font-size: 13px;">
                                {{ returnSummary.text }}</p>
                            <div class="d-flex">
                                <h4 class="card-title text-primary">{{ returnSummary.num1 }}%</h4>
                                <span class="ms-2" :class="returnSummary.num2color">{{ returnSummary.num2 }}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="(ss, index) in returns" :key="index">
            <p class="m-0 px-2">Sub-Order ID: {{ ss.orderID }}</p>
            <h6 class="m-0 px-2 pb-2">{{ ss.name }}</h6>
            <div class="d-flex container">
                <img :src="`${publicPath}${ss.img}`" style="width: 140px; height: 180px; object-fit: contain;" alt="">
                <div class="ms-2 w-75 ">
                    <div class="d-flex justify-content-between border-bottom py-1">
                        <p class="m-0 text-secondary">Quantity</p>
                        <p class="m-0 text-end">{{ ss.qty }}</p>
                    </div>
                    <div class="d-flex justify-content-between border-bottom py-1">
                        <p class="m-0 text-secondary">Size</p>
                        <p class="m-0 text-end">{{ ss.size }}</p>
                    </div>
                    <div class="d-flex justify-content-between border-bottom py-1">
                        <p class="m-0 text-secondary">SKU ID</p>
                        <p class="m-0 text-end">{{ ss.Sku }}</p>
                    </div>
                    <div class="d-flex justify-content-between border-bottom py-1 ">
                        <p class="m-0 text-secondary">Return type</p>
                        <p class="m-0 text-end">{{ ss.returnType }}</p>
                    </div>
                    <div class="d-flex justify-content-between border-bottom py-1">
                        <p class="m-0 text-secondary">Return Type</p>
                        <p class="m-0 text-end ">{{ ss.qty }}</p>
                    </div>
                    <div class="d-flex justify-content-between border-bottom py-1">
                        <p class="m-0 text-secondary">AWB</p>
                        <p class="m-0 text-primary">{{ ss.awb }}</p>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between p-2 border">
                <div>
                    <p class="m-0 fw-bold">Status: <span class="fw-normal"> {{ ss.status }}</span></p>
                    <p class="m-0 fw-bold">Courier Partner: <span class="fw-normal">{{ ss.courierBy }}</span></p>
                </div>
                <button class="btn btn-primary" @click="showCanvas(ss)">View Details</button>
            </div>
        </div>
        <div v-if="Object.entries(activeCanvas).length" class="offcanvas offcanvas-start show" tabindex="-1">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExample25Label">Discription</h5>
                <button type="button" class="btn-close" @click="hideCanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p class="fw-bold">{{ activeCanvas.name }}</p>
                <div class="d-flex border-bottom pb-2">
                    <img :src="`${publicPath}${activeCanvas.img}`" style="width: 140px; height: 140px; object-fit: contain;"
                        alt="">
                    <div class="ms-2 ">
                        <div class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">SKU ID</p>
                            <p class="m-0 text-end">{{ activeCanvas.Sku }}</p>
                        </div>
                        <div class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">Category</p>
                            <p class="m-0 text-end">{{ activeCanvas.category }}</p>
                        </div>
                        <div class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">Size</p>
                            <p class="m-0 text-end">{{ activeCanvas.size }}</p>
                        </div>
                        <div class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">Quantity</p>
                            <p class="m-0 text-end">{{ activeCanvas.qty }}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <h6>Shipment Details</h6>
                    <div class="border p-2">
                        <div class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">Sub-order ID</p>
                            <p class="m-0 text-end">{{ activeCanvas.orderID }}</p>
                        </div>
                        <div class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">Return Type</p>
                            <p class="m-0 text-end">{{ activeCanvas.returnType }}</p>
                        </div>
                        <div class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">Sub-order ID</p>
                            <p class="m-0 text-end">{{ activeCanvas.orderID }}</p>
                        </div>
                        <div class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">Primary return Reason</p>
                            <p class="m-0 text-end">{{ activeCanvas.reason }}</p>
                        </div>
                        <div class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">Secondary return Reason</p>
                            <p class="m-0 text-end">{{ activeCanvas.reason }}</p>
                        </div>
                        <div class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">Return Shipping Fee</p>
                            <p class="m-0 text-end">{{ activeCanvas.shippingFee }}</p>
                        </div>
                        <div class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">AWB Number</p>
                            <p class="m-0 text-end">{{ activeCanvas.awb }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/common/BottomNav.vue';
import ReturnLinks from './ReturnLinks.vue';

export default {
    name: "OverviewPage",
    components: { ReturnLinks, BottomNav },
    data() {
        return {
            publicPath: process.env.BASE_URL

        }
    },

    computed: {
        returnSummries() {
            return this.$store.getters['meesho/getReturnSummries']
        },
        returns() {
            return this.$store.getters['meesho/getReturns']
        },
        activeCanvas() {
            return this.$store.getters["meesho/getActiveCanvas"];
        },
    },
    methods: {
        showCanvas(canvas) {
            return this.$store.dispatch("meesho/selectCanvas", canvas);
        },
        hideCanvas() {
            return this.$store.dispatch("meesho/hideCanvas");
        }
    },
}
</script>

<style lang="scss" scoped></style>