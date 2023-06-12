<template>
    <div style="padding-bottom: 100px;">
        <InventoryLink></InventoryLink>
        <ActiveLink></ActiveLink>
        <div class="d-flex justify-content-center w-100">
            <button class="btn btn-light w-100  border" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">Sort</button>
            <button class="btn btn-light w-100  border" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1"
                aria-controls="offcanvasExample1">Filter</button>
        </div>


        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Sort</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                        <label class="form-check-label" for="flexRadioDefault1">
                            Highest Estimated Orders
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                        <label class="form-check-label" for="flexRadioDefault2">
                            Newest First
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel"
            style="height: 70vh">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">

            </div>
        </div>





        <div class="">
            <div class="container mb-2 border" v-for="(inventory, index) in inventories" :key="index">
                <div class="w-100">
                    <p class="fs-5 my-2" style="font-weight: 500;">{{ inventory.name }}</p>
                    <div class="d-flex">
                        <div class="">
                            <img :src="inventory.img" style="width: 100px; height: 120px; object-fit: cover;">
                        </div>
                        <div class="ms-2 w-75">
                            <div v-for="(d, key) in inventory.detail" :key="key"
                                class="d-flex justify-content-between border-bottom py-1">
                                <p class="m-0 text-secondary">{{ d.text }}</p>
                                <p class="m-0 text-end">{{ d.number }}<sup><i :class="d.icon"></i></sup></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center py-2 border-top"
                    style="font-size: 14px; font-weight: 500;">
                    <div class="">
                        <p class="m-0">Out of Stock <span class="text-danger">{{ inventory.outofstock }} SKUs</span></p>
                        <p class="m-0">Low Stock <span class="text-danger">{{ inventory.lowstock }} SKUs</span></p>
                    </div>
                    <button class="btn btn-secondary" @click="showInventory(inventory)"
                        style="font-size: 12px; font-weight:500;"><i class="bi bi-airplane-fill"></i>
                        Boost</button>
                    <button class="btn btn-primary" @click="showProduct(inventory)"
                        style="font-size: 12px; font-weight:500;">View Products</button>
                </div>
            </div>

            <!-- ----Boost Product Canvas---- -->
            <div v-if="Object.keys(activeInventory).length !== 0">
                <div class="offcanvas offcanvas-bottom show" style="height: 70vh;" data-bs-backdrop="static" tabindex="-1"
                    id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <div class="offcanvas-header border">
                        <h5 class="offcanvas-title" id="staticBackdropLabel">New Ad Campaign</h5>
                        <button type="button" class="btn" @click="hideInventory()"><i class="bi bi-x fs-4"></i></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="container border">
                            <div class="">
                                <h5>Reach more buyers & increase orders with Ad</h5>

                                <div v-for="(camp, index) in campaign" :key="index" class="d-flex justify-content-between">
                                    <p class="m-0">{{ camp.name }}</p>
                                    <p class="m-0 text-end">{{ camp.value }} </p>
                                </div>

                                <div class="d-flex justify-content-end my-2">
                                    <button class="btn btn-success ">Cancel campaign anytime</button>
                                </div>
                            </div>

                            <div class="d-flex mt-4">
                                <div class="w-30">
                                    <img :src="activeInventory.img" style="height:100px; width:100px">
                                </div>
                                <div class="ms-2 w-75">
                                    <div class="">
                                        <h6>{{ activeInventory.name }}</h6>
                                        <div v-for="(d, key) in activeInventory.detail" :key="key"
                                            class="d-flex justify-content-between border-bottom py-1">
                                            <p class="m-0 text-secondary">{{ d.text }}</p>
                                            <p class="m-0 text-end">{{ d.number }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-info w-100 my-3">Submit Campaign</button>
                        </div>

                    </div>

                </div>
            </div>

            <!-- ---View Product canvas----- -->
            <div v-if="Object.keys(activeProduct).length !== 0">
                <div class="offcanvas offcanvas-bottom show" style="height: 70vh;" data-bs-backdrop="static" tabindex="-1"
                    id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <div class="offcanvas-header border">
                        <h5 class="offcanvas-title" id="staticBackdropLabel"><i class="bi bi-arrow-left"></i> </h5>
                        <button type="button" class="btn" @click="hideProduct()"><i class="bi bi-x fs-4"></i></button>
                    </div>
                    <div class="offcanvas-body">

                        <h4>{{ activeProduct.name }}</h4>
                        <div class="bg-secondary px-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    SKUs {{ activeProduct.index }}
                                </label>
                            </div>
                        </div>
                        <div v-for="(d, key) in activeProduct.detail" :key="key"
                            class="d-flex justify-content-between border-bottom py-1">
                            <p class="m-0 text-secondary">{{ d.text }}</p>
                            <p class="m-0 text-end">{{ d.number }}</p>
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
import ActiveLink from './ActiveLink.vue';
import InventoryLink from './InventoryLink.vue';

export default {
    name: 'AllStockPage',
    data() {
        return {
            campaign: [
                { name: 'Campaign name', value: 'Ad_I 08 Jun 2023 | 14.59' },
                { name: 'Budget', value: 'Rs.100 Daily Budget' },
                { name: 'Duration', value: '08 Jun 2023 - No end date' }
            ],
            sort: [
                { type: 'radio', name: 'Highest Estimated Orders' },
                { type: 'radio', name: 'Newest First' },
            ],
        }
    },
    components: { InventoryLink, ActiveLink, BottomNav },
    computed: {
        inventories() {
            return this.$store.getters['meesho/getInventories']
        },
        activeInventory() {
            return this.$store.getters['meesho/getActiveInventory']
        },
        activeProduct() {
            return this.$store.getters['meesho/getActiveProduct']
        }
    },
    methods: {
        showInventory(inventory) {
            return this.$store.dispatch('meesho/selectInventory', inventory);
        },
        hideInventory() {
            return this.$store.dispatch('meesho/hideInventory');
        },
        showProduct(inventory) {
            return this.$store.dispatch('meesho/selectProduct', inventory);
        },
        hideProduct() {
            return this.$store.dispatch('meesho/hideProduct');
        },
       
    }
}
</script>

