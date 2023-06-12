<template>
    <div style="padding-bottom: 100px;">
        <div class="d-flex justify-content-between container p-2">
            <b>Order/Ready To Ship</b>
            <b><i class="bi bi-search"></i><i class="bi bi-question-circle ms-2"></i></b>
        </div>

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
                      tabindex="-1" id="offcanvasScrolling"
                    aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Select Search ID</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body bg-light">
                        <div class="container">
                            <div class="form-check" v-for="(filter, index) in filters" :key="index">
                                <input class="form-check-input" :type="filter.type" :name="filter.name"
                                    :id="'flexRadioDefault' + index" :value="filter.value" v-model="selectedOption"
                                    data-bs-dismiss="offcanvas">
                                <label class="form-check-label" :for="'flexRadioDefault' + index">
                                    {{ filter.value }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="d-flex justify-content-evenly w-100">
                <button class="btn border w-100 rounded-0 w-25" data-bs-toggle="offcanvas" data-bs-target="#label"
                    aria-controls="label" id="button-addon1">label</button>
                <button class="btn border w-100 rounded-0 w-25 " data-bs-toggle="offcanvas" data-bs-target="#sla"
                    aria-controls="sla" id="button-addon1">SLA</button>
                <button class="btn border w-100 rounded-0 w-25" data-bs-toggle="offcanvas" data-bs-target="#filter"
                    aria-controls="filter" id="button-addon1">Filter</button>



                <div class="offcanvas offcanvas-bottom " style="height:80vh !important;" data-bs-scroll="true"
                      tabindex="-1" id="label" aria-labelledby="label">
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
                      tabindex="-1" id="sla" aria-labelledby="sla">
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
                      tabindex="-1" id="filter" aria-labelledby="filter">
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

        <div class="container mt-4">
            <div class="container bg-light" style="font-size: 13px;font-weight: 500;">
                <div class="form-check py-2">
                    <input class="form-check-input" type="checkbox" name="SELECT" id="SELECT">
                    <label class="form-check-label" for="SELECT">
                        SELECT ALL ORDERS
                    </label>
                </div>
            </div>

             <div class="container mb-3 border" v-for="(order, index) in orders" :key="index">
                <div class="d-flex justify-content-between" style="font-size: 13px;font-weight: 500;">
                    <div class="form-check py-2">
                        <input class="form-check-input" type="checkbox" name="Order" :id="'Order' + index">
                        <label class="form-check-label" :for="'Order' + index">
                            Order No:{{ order.oid }}
                        </label>
                    </div>
                    <p></p>
                    <span class="py-2">{{ order.date }} {{ order.time }}</span>
                </div>
                <div class="w-100">
                    <p class="fs-4 my-2" style="font-weight: 500;">{{ order.name }}</p>
                    <div class="d-flex">
                        <div class="w-30">
                            <img :src="order.img" style="width: 140px; height: 160px; object-fit: contain;">
                        </div>
                        <div class="ms-2 w-75">

                            <div v-for="(d,key) in order.detial" :key="key" class="d-flex justify-content-between border-bottom py-1">
                                <p class="m-0 text-secondary">{{ d.name }}</p>
                                <p class="m-0 text-end">{{ d.value }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center py-2 border-top" style="font-size: 14px; font-weight: 500;">
                    <p class="m-0" >Disptached Date <span class="text-danger">{{ order.date }}</span></p>
                    <button class="btn btn-secondary" style="font-size: 12px; font-weight:500;">Cancel</button>
                    <button class="btn btn-primary" style="font-size: 12px; font-weight:500;">Accept</button>
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
            selectedOption: 'Select',
            filters: [
                { type: 'radio', name: 'flexRadioDefault', value: 'SKU ID' },
                { type: 'radio', name: 'flexRadioDefault', value: 'MEESHO ID' },
                { type: 'radio', name: 'flexRadioDefault', value: 'VSKU ID' },
                { type: 'radio', name: 'flexRadioDefault', value: 'Sub Order ID' },
            ]
        }
    },
    computed: {
        orders() {
            return this.$store.getters['meesho/getOrders']
        }
    }
}
</script>

<style lang="scss" scoped></style>