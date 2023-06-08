<template>
    <div>
        <ReturnLinks></ReturnLinks>
        <TrackingLinks></TrackingLinks>
        <h1>iam transit page</h1>

        <div class="d-flex justify-content-evenly bg-light p-2">
            <button class="btn btn-dark rounded-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">Return Created</button>

            <button class="btn btn-dark rounded-0" data-bs-toggle="offcanvas" data-bs-target="#filter"
                aria-controls="filter" id="button-addon1">Filters</button>
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
                data-bs-backdrop="false" tabindex="-1" id="filter" aria-labelledby="filter">
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
                                    data-bs-target="#v-tabs-profile" type="button" role="tab" aria-controls="v-tabs-profile"
                                    aria-selected="false">Expected Delivery Date</button>
                                <button class="nav-link" id="v-tabs-order-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-tabs-order" type="button" role="tab" aria-controls="v-tabs-disabled"
                                    aria-selected="false">Return Type</button>
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
import ReturnCreadted from './ReturnCreadted.vue';
import ReturnLinks from './ReturnLinks.vue';
import TrackingLinks from './TrackingLinks.vue';

export default {
    name: "IntransitPage",
    components: { TrackingLinks, ReturnLinks, ReturnCreadted }
}
</script>

<style lang="scss" scoped></style>