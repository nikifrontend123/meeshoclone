<template>
    <div>
        <OrderLink></OrderLink>


        <div class="">
            <div class="">
                <div class="input-group mb-3 container mt-2">
                    <button class="btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                        aria-controls="offcanvasScrolling" id="button-addon1">{{ selectedOption }}</button>
                    <input type="search" class="form-control" placeholder="" aria-label="Example text with button addon"
                        aria-describedby="button-addon1">
                </div>

                <div class="offcanvas offcanvas-bottom " style="height:35vh !important;" data-bs-scroll="true"
                    data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling"
                    aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Select Search ID</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body bg-light">
                        <div class="container">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                    value="SKU ID" v-model="selectedOption" data-bs-dismiss="offcanvas">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    SKU ID
                                </label>
                            </div>
                            <div class="form-check ">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    value="MEESHO ID" v-model="selectedOption" data-bs-dismiss="offcanvas">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    MEESHO ID
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                                    value="VSKU ID" v-model="selectedOption" data-bs-dismiss="offcanvas">
                                <label class="form-check-label" for="flexRadioDefault3">
                                    VSKU ID
                                </label>
                            </div>
                            <div class="form-check ">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"
                                    value="Sub Order ID" v-model="selectedOption" data-bs-dismiss="offcanvas">
                                <label class="form-check-label" for="flexRadioDefault4">
                                    Sub Order ID
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="d-flex justify-content-evenly bg-light w-100">
                <button class="btn btn-dark rounded-0 w-25" data-bs-toggle="offcanvas" data-bs-target="#label"
                    aria-controls="label" id="button-addon1">label</button>
                <button class="btn btn-dark rounded-0 w-25 " data-bs-toggle="offcanvas" data-bs-target="#sla"
                    aria-controls="sla" id="button-addon1">SLA</button>
                <button class="btn btn-dark rounded-0 w-25" data-bs-toggle="offcanvas" data-bs-target="#filter"
                    aria-controls="filter" id="button-addon1">Filter</button>



                <div class="offcanvas offcanvas-bottom " style="height:80vh !important;" data-bs-scroll="true"
                    data-bs-backdrop="false" tabindex="-1" id="label" aria-labelledby="label">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="label">Select Search ID</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body bg-light ">
                        <LabelRTS></LabelRTS>
                        <div class="position-absolute bottom-0 w-100">
                            <div class="d-flex justify-content-evenly ">
                                <p class="m-0">0 Orders</p>
                                <button class="btn btn-primary rounded-0" data-bs-dismiss="offcanvas"> Done</button>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="offcanvas offcanvas-bottom " style="height:35vh !important;" data-bs-scroll="true"
                    data-bs-backdrop="false" tabindex="-1" id="sla" aria-labelledby="sla">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="sla">Select Search ID</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body bg-light">
                        <SlaPage></SlaPage>
                        <div class="d-flex align-items-center justify-content-between mt-2 pt-2 border-top">
                            <p class="">0 Orders</p>
                            <button class="btn btn-primary rounded-0" data-bs-dismiss="offcanvas"> Done</button>
                        </div>
                    </div>
                </div>
                <!-- --------------------------------. -->

                <!-- --------------------------------. -->
                <div class="offcanvas offcanvas-bottom " style="height:80vh !important;" data-bs-scroll="true"
                    data-bs-backdrop="false" tabindex="-1" id="filter" aria-labelledby="filter">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="filter">Filters</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body  bg-light">
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
                                        <SlaPage></SlaPage>
                                    </div>

                                    <div class="tab-pane fade show active" id="v-tabs-label" role="tabpanel"
                                        aria-labelledby="v-tabs-label-tab" tabindex="0">
                                        <LabelRTS></LabelRTS>
                                    </div>

                                    <div class="tab-pane fade" id="v-tabs-dispatched" role="tabpanel"
                                        aria-labelledby="v-tabs-profile-tab" tabindex="0">
                                        <DispatchPage></DispatchPage>
                                    </div>
                                    <div class="tab-pane fade" id="v-tabs-filter" role="tabpanel"
                                        aria-labelledby="v-tabs-order-tab" tabindex="0">
                                        <DispatchPage></DispatchPage>
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
import OrderLink from './OrderLink.vue';
import SlaPage from './SlaPage.vue';
import DispatchPage from './DispatchPage.vue';
import LabelRTS from './LabelRTS.vue';

export default {
    name: "ReadytoshipPage",
    components: { OrderLink, BottomNav, SlaPage, DispatchPage, LabelRTS },
    data() {
        return {

            selectedOption: 'Select'
        }
    },
}
</script>

<style lang="scss" scoped></style>