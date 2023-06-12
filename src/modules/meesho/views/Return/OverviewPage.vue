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
        <div class="d-flex justify-content-between border align-items-center p-2 btn" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" id="button-addon1">
            <p class="m-0"><i class="bi bi-arrow-up-right"></i>Product Performance</p>
            <i class="bi bi-chevron-right"></i>
        </div>
        <div class="offcanvas offcanvas-bottom" style="height: 100%;" data-bs-scroll="true" data-bs-backdrop="false"
            tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Product Performance</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="d-flex w-100">
                    <button class="btn border rounded-0 w-100"  data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><i class="bi bi-filter"></i>
                        Filter</button>
                    <button class="btn border rounded-0 w-100"><i class="bi bi-arrow-down-up"></i> Sort</button>
                </div>
                <div v-for="(ss, index) in returns" :key="index">
                    <h6 class="m-0 px-2 pb-2">{{ ss.name }}</h6>
                    <span class="bg-light rounded px-2 text-secondary">Dual Pricing Enabled</span>
                    <div class="d-flex container mt-3">
                        <img :src="`${publicPath}${ss.img}`" style="width: 100px; height: 120px; object-fit: contain;"
                            alt="">
                        <div class="ms-2 w-75 ">
                            <div v-for="(detail, index) in ss.details" :key="index"
                                class="d-flex justify-content-between border-bottom py-1">
                                <p class="m-0 text-secondary">{{ detail.name }}</p>
                                <p class="m-0 text-end">{{ detail.value }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between p-2 border">
                        <div style="width: 60%;">
                            <p class="m-0 fw-bold text-danger" style="font-size: 12px;">0.4% <span
                                    class="fw-normal text-dark"> Return increased compared to the last month</span></p>
                        </div>
                        <button class="btn border fw-bold">View Details</button>
                    </div>
                </div>
                <div class="offcanvas offcanvas-bottom " style="height:30vh !important;" data-bs-scroll="true"
                    data-bs-backdrop="false" tabindex="-1" id="filter" aria-labelledby="filter">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="filter">Filters</h5>
                        <button type="button" class="btn-close" @click="toggleInnerOffcanvas"></button>
                    </div>
                    <div class="offcanvas-body bg-light">
                        <div class="">
                            <div class="d-flex align-items-start">
                                <div class="nav flex-column nav-tabs me-3" id="v-tabs-tab" role="tablist"
                                    aria-orientation="vertical">
                                    <button class="nav-link " id="v-tabs-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-tabs-sla" type="button" role="tab" aria-controls="v-tabs-sla"
                                        aria-selected="true">SLA</button>

                                    <button class="nav-link " id="v-tabs-label-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-tabs-label" type="button" role="tab" aria-controls="v-tabs-label"
                                        aria-selected="true">Label</button>

                                    <button class="nav-link" id="v-tabs-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-tabs-dispatched" type="button" role="tab"
                                        aria-controls="v-tabs-dispatched" aria-selected="true">Dispatched</button>

                                    <button class="nav-link" id="v-tabs-order-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-tabs-filter" type="button" role="tab"
                                        aria-controls="v-tabs-filter" aria-selected="true">Filter</button>
                                </div>
                                <div class="tab-content" id="v-tabs-tabContent">
                                    <div class="tab-pane fade show " id="v-tabs-sla" role="tabpanel"
                                        aria-labelledby="v-tabs-home-tab" tabindex="0">
                                        dsfdsf
                                    </div>

                                    <div class="tab-pane fade show active" id="v-tabs-label" role="tabpanel"
                                        aria-labelledby="v-tabs-label-tab" tabindex="0">
                                        dsfdsf
                                    </div>

                                    <div class="tab-pane fade" id="v-tabs-dispatched" role="tabpanel"
                                        aria-labelledby="v-tabs-profile-tab" tabindex="0">
                                        sdfdsf
                                    </div>
                                    <div class="tab-pane fade" id="v-tabs-filter" role="tabpanel"
                                        aria-labelledby="v-tabs-order-tab" tabindex="0">
                                        sdfdsf
                                    </div>
                                </div>
                            </div>
                            <div class="position-absolute bottom-0 w-100">
                                <div class="d-flex justify-content-evenly ">
                                    <p class="m-0">0 Orders</p>
                                    <button class="btn btn-primary rounded-0" data-bs-dismiss="offcanvas"> Clear
                                        Filter</button>
                                    <button class="btn btn-primary rounded-0" data-bs-dismiss="offcanvas"> Done</button>
                                </div>
                            </div>

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
        },
        // toggleInnerOffcanvas(bootstrap) {
        //     const innerOffcanvas = new bootstrap.Offcanvas(this.$refs.innerOffcanvas);
        //     innerOffcanvas.toggle();
        // },
    },
}
</script>

<style lang="scss" scoped></style>