<template>
    <div>
        <ReturnLinks></ReturnLinks>
        <TrackingLinks></TrackingLinks>
        <div class="">
            <div class="d-flex justify-content-evenly  ">
                <button class="btn border rounded-0 w-100" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"><i class="bi bi-calendar"></i> Return Created</button>

                <button class="btn border rounded-0 w-100" data-bs-toggle="offcanvas" data-bs-target="#filter"
                    aria-controls="filter" id="button-addon1"><i class="bi bi-funnel"></i> Filters</button>
            </div>

            <div class="">
                <div class="offcanvas offcanvas-bottom" style="height: 50vh !important;" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">RETURN CREATED</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ReturnCreadted></ReturnCreadted>
                    </div>
                </div>
            </div>

            <!-- --------------------------- -->

            <div class="">
                <div class="offcanvas offcanvas-bottom " style="height:80vh !important;" data-bs-scroll="true"
                      tabindex="-1" id="filter" aria-labelledby="filter">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="filter">Filters</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body  bg-light">
                        <div class="">
                            <div class="d-flex align-items-start">
                                <div class="nav flex-column nav-tabs me-3 w-25" id="v-tabs-tab" role="tablist"
                                    aria-orientation="vertical">
                                    <button class="nav-link active" id="v-tabs-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-tabs-home" type="button" role="tab" aria-controls="v-tabs-home"
                                        aria-selected="true">Return Created</button>
                                    <button class="nav-link" id="v-tabs-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-tabs-profile" type="button" role="tab"
                                        aria-controls="v-tabs-profile" aria-selected="false">Expected Delivery Date</button>
                                    <button class="nav-link" id="v-tabs-order-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-tabs-order" type="button" role="tab"
                                        aria-controls="v-tabs-disabled" aria-selected="false">Return Type</button>
                                </div>
                                <div class="tab-content w-75" id="v-tabs-tabContent">
                                    <div class="tab-pane fade show active" id="v-tabs-home" role="tabpanel"
                                        aria-labelledby="v-tabs-home-tab" tabindex="0">
                                        <ReturnCreadted></ReturnCreadted>
                                    </div>

                                    <div class="tab-pane fade" id="v-tabs-profile" role="tabpanel"
                                        aria-labelledby="v-tabs-profile-tab" tabindex="0">
                                        <div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault1" data-bs-dismiss="offcanvas">
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Tomorrow
                                                </label>
                                            </div>
                                            <div class="form-check mb-2 ">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault2" data-bs-dismiss="offcanvas">
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    Next 3 days
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault3" data-bs-dismiss="offcanvas">
                                                <label class="form-check-label" for="flexRadioDefault3">
                                                    Next 1 week
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault4" data-bs-dismiss="offcanvas">
                                                <label class="form-check-label" for="flexRadioDefault4">
                                                    Next 2 weeks
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault5" data-bs-dismiss="offcanvas">
                                                <label class="form-check-label" for="flexRadioDefault5">
                                                    Next 1 month
                                                </label>
                                            </div>
                                            <div class="form-check mb-2 ">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault6" data-bs-dismiss="offcanvas">
                                                <label class="form-check-label" for="flexRadioDefault6">
                                                    Next 3 months
                                                </label>
                                            </div>
                                            <div class="form-check ">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault7" data-bs-dismiss="offcanvas">
                                                <label class="form-check-label" for="flexRadioDefault7">
                                                    Custom date range
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="v-tabs-order" role="tabpanel"
                                        aria-labelledby="v-tabs-order-tab" tabindex="0">

                                        <div class="">
                                            <div class="form-check ">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault1" data-bs-dismiss="offcanvas">
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Customer Return
                                                </label>
                                            </div>
                                            <div class="form-check ">
                                                <input class="form-check-input" type="radio" name="flexRadioDefaul2"
                                                    id="flexRadioDefault2" data-bs-dismiss="offcanvas">
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    Courier Return
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="position-absolute bottom-0 w-100">
                                <div class="d-flex justify-content-evenly ">
                                    <p class="m-0">0 Orders</p>
                                    <button class="btn btn-primary rounded-0" data-bs-dismiss="offcanvas"> Clear
                                        Filter</button>
                                    <button class="btn btn-primary rounded-0"> Done</button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

            <div v-for="(ss, index) in intransits" :key="index">
                <h6 class="m-0 px-2 pb-2">{{ ss.name }}</h6>
                <div class="d-flex container mt-3">
                    <img :src="`${publicPath}${ss.img}`" style="width: 100px; height: 120px; object-fit: contain;" alt="">
                    <div class="ms-2 w-75 ">
                        <div v-for="(detail, index) in ss.details" :key="index"
                            class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">{{ detail.name }}</p>
                            <p class="m-0 text-end">{{ detail.value }}</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between p-2 border">
                    <div style="width: 60%; font-size: 13px;">
                        <p class="m-0"><Span class="text-secondary">Return Created :</Span> 9 june'23</p>
                        <p class="m-0"><Span class="text-secondary">Courier Partner :</Span> Xpress Bees</p>
                    </div>
                    <button class="btn border fw-bold" @click="showIntransit(ss)">View Details</button>
                </div>
            </div>

            <div v-if="Object.keys(activeIntransit).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="d-flex justify-content-center align-items-center border-bottom">
                        <div class=" w-100 d-flex justify-content-center align-items-center">
                            <p class="fw-bold text-center m-0">Product Performance</p>
                        </div>
                        <div class="d-flex justify-content-end w-100">
                            <button type="button" class="btn" @click="hideIntransit()"><i class="bi bi-x fs-3"></i></button>
                        </div>
                    </div>
                    <div class="offcanvas-body ">
                        <div class="">
                            <p class="m-0" style="font-size: 13px;"><span class="text-secondary">Sub-Order ID :</span>{{
                                activeIntransit.orderID }}</p>
                            <p class="m-0 ">{{ activeIntransit.name }}</p>
                            <div class="d-flex mt-2">
                                <img :src="`${publicPath}${activeIntransit.img}`"
                                    style="width: 100px; height: 120px; object-fit: contain;" alt="">
                                <div class="ms-2 w-75 ">
                                    <div v-for="(detail, index) in activeIntransit.details" :key="index"
                                        class="d-flex justify-content-between border-bottom py-1">
                                        <p class="m-0 text-secondary">{{ detail.name }}</p>
                                        <p class="m-0 text-end">{{ detail.value }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-2">
                            <b>Shipment Details</b>
                            <div v-for="(sd,index) in activeIntransit.shipmentdetails" :key="index" class="d-flex justify-content-between border-bottom">
                                <p class="m-0 text-secondary py-1">{{sd.name}}</p>
                                <p class="m-0 py-1">{{ sd.value }}</p>
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
import ReturnCreadted from './ReturnCreadted.vue';
import ReturnLinks from './ReturnLinks.vue';
import TrackingLinks from './TrackingLinks.vue';

export default {
    name: "IntransitPage",
    components: { TrackingLinks, ReturnLinks, ReturnCreadted, BottomNav },
    data() {
        return {
            publicPath: process.env.BASE_URL

        }
    },
    computed: {
        intransits() {
            return this.$store.getters['meesho/getIntransits']
        },
        activeIntransit() {
            return this.$store.getters['meesho/getActiveIntransit'];
        },
    },
    methods: {
        showIntransit(intransit) {
            return this.$store.dispatch('meesho/selectIntransit', intransit);
        },
        hideIntransit() {
            return this.$store.dispatch('meesho/hideIntransit');
        },
    }
}
</script>

<style lang="scss" scoped></style>