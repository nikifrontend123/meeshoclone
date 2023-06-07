<template>
    <div>
        <OrderLink></OrderLink>
        <div class="">
            <div class="input-group mb-3 container mt-2">
                <button class="btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                    aria-controls="offcanvasScrolling" id="button-addon1">{{ selectedOption }}</button>
                <input type="search" class="form-control" placeholder="" aria-label="Example text with button addon"
                    aria-describedby="button-addon1">
            </div>

            <div class="offcanvas offcanvas-bottom " style="height:35vh !important;" data-bs-scroll="true"
                data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Select Search ID</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body bg-light">
                    <div class="container">
                        <div class="form-check fs-4">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                value="SKU ID" v-model="selectedOption" data-bs-dismiss="offcanvas">
                            <label class="form-check-label" for="flexRadioDefault1">
                                SKU ID
                            </label>
                        </div>
                        <div class="form-check fs-4">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                value="MEESHO ID" v-model="selectedOption" data-bs-dismiss="offcanvas">
                            <label class="form-check-label" for="flexRadioDefault2">
                                MEESHO ID
                            </label>
                        </div>
                        <div class="form-check fs-4">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                                value="VSKU ID" v-model="selectedOption" data-bs-dismiss="offcanvas">
                            <label class="form-check-label" for="flexRadioDefault3">
                                VSKU ID
                            </label>
                        </div>
                        <div class="form-check fs-4">
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
            <button class="btn btn-dark rounded-0 w-25" data-bs-toggle="offcanvas" data-bs-target="#sla" aria-controls="sla"
                id="button-addon1">SLA</button>
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
            <div class="offcanvas offcanvas-bottom " style="height:30vh !important;" data-bs-scroll="true"
                data-bs-backdrop="false" tabindex="-1" id="dispatch" aria-labelledby="dispatch">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="dispatch">Select Search ID</h5>
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
                        <ul class="nav nav-tabs d-flex justify-content-evenly">
                            <li class="nav-item ">
                                <a class="nav-link p-2 active" id="tab1" data-bs-toggle="tab" href="#content1">SLA
                                    Status</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link p-2" id="tab2" data-bs-toggle="tab" href="#content2">Disptach Date</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link p-2" id="tab2" data-bs-toggle="tab" href="#content3">Order Date</a>
                            </li>
                        </ul>

                        <div class="tab-content position-relative  mt-2">
                            <div class="tab-pane fade show active" id="content1">
                                <SlaPage></SlaPage>
                            </div>

                            <div class="tab-pane fade" id="content2">
                                <DispatchPage></DispatchPage>
                            </div>
                            <div class="tab-pane fade" id="content3">
                                <DispatchPage></DispatchPage>
                            </div>
                        </div>
                        <div class="position-absolute bottom-0 w-100">
                            <div class="d-flex justify-content-evenly ">
                                <p class="m-0">0 Orders</p>
                                <button class="btn btn-primary rounded-0" data-bs-dismiss="offcanvas"> Clear Filter</button>
                                <button class="btn btn-primary rounded-0"> Done</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import OrderLink from './OrderLink.vue';
import SlaPage from './SlaPage.vue';
import DispatchPage from './DispatchPage.vue';

export default {
    name: "PendingPage",
    components: { OrderLink, SlaPage, DispatchPage },
    data() {
        return {

            selectedOption: 'Select'
        }
    },
}
</script>

<style lang="scss" scoped></style>