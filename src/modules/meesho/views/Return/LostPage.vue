<template>
    <div>
        <ReturnLinks></ReturnLinks>
        <TrackingLinks></TrackingLinks>
        <div class="">
            <div class="d-flex justify-content-evenly">
                <button class="btn border w-100 rounded-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"><i class="bi bi-calendar"></i> Lost Date</button>

                <button class="btn border w-100 rounded-0" data-bs-toggle="offcanvas" data-bs-target="#filter"
                    aria-controls="filter" id="button-addon1"><i class="bi bi-funnel"></i> Filters</button>
            </div>

            <div class="">
                <div class="offcanvas offcanvas-bottom" style="height: 50vh !important;" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">LOST DATE</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ReturnCreadted></ReturnCreadted>
                    </div>
                </div>
            </div>


            <div class="">
                <div class="offcanvas offcanvas-bottom " style="height:80vh !important;" data-bs-scroll="true"
                      tabindex="-1" id="filter" aria-labelledby="filter">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="filter">Filters</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body  bg-light">
                        <div class="">

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
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/common/BottomNav.vue';
import ReturnCreadted from './ReturnCreadted.vue';
import ReturnLinks from './ReturnLinks.vue';
import TrackingLinks from './TrackingLinks.vue';

export default {
    name: "LostPage",
    components: { ReturnLinks, TrackingLinks, ReturnCreadted, BottomNav }
}
</script>

<style lang="scss" scoped></style>