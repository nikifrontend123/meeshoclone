<template>
    <div style="padding-bottom: 100px;">
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
                <button class="btn btn-dark rounded-0 w-25 " data-bs-toggle="offcanvas" data-bs-target="#sla"
                    aria-controls="sla" id="button-addon1">SLA</button>
                <button class="btn btn-dark rounded-0 w-25" data-bs-toggle="offcanvas" data-bs-target="#dispatch"
                    aria-controls="dispatch" id="button-addon1">Dispatch</button>
                <button class="btn btn-dark rounded-0 w-25" data-bs-toggle="offcanvas" data-bs-target="#filter"
                    aria-controls="filter" id="button-addon1">Filter</button>

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
                            <button class="btn btn-primary rounded-0"> Done</button>
                        </div>
                    </div>
                </div>
                <!-- --------------------------------. -->
                <div class="offcanvas offcanvas-bottom " style="height:40vh !important;" data-bs-scroll="true"
                    data-bs-backdrop="false" tabindex="-1" id="dispatch" aria-labelledby="dispatch">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="dispatch">Dispatch Date</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body bg-light ">
                        <DispatchPage></DispatchPage>
                        <div class="d-flex justify-content-between">
                            <p>0 Orders</p>
                            <button class="btn btn-primary rounded-0"> Done</button>
                        </div>
                    </div>
                </div>

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
                                    <button class="nav-link active" id="v-tabs-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-tabs-home" type="button" role="tab" aria-controls="v-tabs-home"
                                        aria-selected="true">SLA</button>
                                    <button class="nav-link" id="v-tabs-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-tabs-profile" type="button" role="tab"
                                        aria-controls="v-tabs-profile" aria-selected="false">Dispatched</button>
                                    <button class="nav-link" id="v-tabs-order-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-tabs-order" type="button" role="tab"
                                        aria-controls="v-tabs-disabled" aria-selected="false">Filter</button>
                                </div>
                                <div class="tab-content" id="v-tabs-tabContent">
                                    <div class="tab-pane fade show active" id="v-tabs-home" role="tabpanel"
                                        aria-labelledby="v-tabs-home-tab" tabindex="0">
                                        <SlaPage></SlaPage>
                                    </div>
                                    <div class="tab-pane fade" id="v-tabs-profile" role="tabpanel"
                                        aria-labelledby="v-tabs-profile-tab" tabindex="0">
                                        <DispatchPage></DispatchPage>
                                    </div>
                                    <div class="tab-pane fade" id="v-tabs-order" role="tabpanel"
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
                                    <button class="btn btn-primary rounded-0"> Done</button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>

        <div class="container mt-4">
            <div class="container bg-secondary">
                <div class="form-check py-2">
                    <input class="form-check-input" type="checkbox" name="SELECT" id="SELECT">
                    <label class="form-check-label" for="SELECT">
                        SELECT ALL ORDERS
                    </label>
                </div>
            </div>
            <div class="container  border" v-for="(order, index) in orders" :key="index">
                <div class="d-flex justify-content-between">
                    <div class="form-check py-2">
                        <input class="form-check-input" type="checkbox" name="Order" id="Order">
                        <label class="form-check-label" for="Order">
                            Order No:{{ order.oid }}
                        </label>
                    </div>
                    <p></p>
                    <span class="py-2">{{ order.date }} {{ order.time }}</span>
                </div>
                <div class="w-100">
                    <h6 class="my-2">{{ order.name }}</h6>
                    <div class="d-flex">
                        <div class="w-30">
                            <img :src="order.img" style="height:100px; width:100px">
                        </div>
                        <div class="ms-2 w-75">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-column">
                                    <p class="m-0">Quntity</p>
                                    <p class="m-0">Size</p>
                                    <p class="m-0">SKU ID</p>
                                    <p class="m-0">Meesho ID</p>
                                    <p class="m-0">Sub-Order ID</p>
                                </div>
                                <div class="d-flex flex-column">
                                    <p class="m-0 text-end">{{ order.qty }} Unit</p>
                                    <p class="m-0 text-end">{{ order.size }}</p>
                                    <p class="m-0 text-end">{{ order.skuid }}</p>
                                    <p class="m-0 text-end">{{ order.meeshoid }}</p>
                                    <p class="m-0 text-end">{{ order.suborderid }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center py-2 border-top">
                    <p>Disptached Date <span class="text-danger">{{ order.date }}</span></p>
                    <button class="btn btn-secondary">Cancel</button>
                    <button class="btn btn-primary">Accept</button>
                </div>
            </div>
        </div>



        <BottomNav></BottomNav>
    </div>
</template>

<script>
import OrderLink from './OrderLink.vue';
import SlaPage from './SlaPage.vue';
import DispatchPage from './DispatchPage.vue';
import BottomNav from '@/components/common/BottomNav.vue';
// import OrderLink from './order/OrderLink.vue';

export default {
    name: "PendingPage",
    components: { OrderLink, SlaPage, DispatchPage, BottomNav },
    data() {
        return {

            selectedOption: 'Select'
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