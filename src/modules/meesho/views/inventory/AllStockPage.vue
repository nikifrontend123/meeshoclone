<template>
    <div style="padding-bottom: 100px;">
        <InventoryLink></InventoryLink>
        <ActiveLink></ActiveLink>
        <div class="d-flex justify-content-center w-100">
            <button class="btn btn-light w-100  border">Sort</button>
            <button class="btn btn-light w-100  border">Filter</button>
        </div>

        <div class="">
            <div class="container mb-2 border" v-for="(inventory, index) in inventories" :key="index">
                <div class="w-100">
                    <h6 class="my-2">{{ inventory.name }}</h6>
                    <div class="d-flex">
                        <div class="">
                            <img :src="inventory.img" style="height:100px; width:100px">
                        </div>
                        <div class="ms-2 w-75">
                            <div class="d-flex justify-content-between">
                                <p class="m-0">Catalog ID</p>
                                <p class="m-0 text-end">{{ inventory.catalogid }}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p class="m-0">Category</p>
                                <p class="m-0 text-end">{{ inventory.category }}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p class="m-0">SKUs</p>
                                <p class="m-0 text-end">{{ inventory.sku }}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p class="m-0">Ratings</p>
                                <p class="m-0 text-end">{{ inventory.ratings }} <sup><i class="bi bi-star-fill"></i></sup></p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p class="m-0">Orders in last 30 days</p>
                                <p class="m-0 text-end">{{ inventory.order }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center py-2 border-top">
                    <div class="">
                        <p class="m-0">Out of Stock <span class="text-danger">{{ inventory.outofstock }} SKUs</span></p>
                        <p class="m-0">Low Stock <span class="text-danger">{{ inventory.lowstock }} SKUs</span></p>
                    </div>
                    <button class="btn btn-secondary" @click="showInventory(inventory)"><i class="bi bi-airplane-fill"></i> Boost</button>
                    <button class="btn btn-primary">View Products</button>
                </div>
            </div>

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
                                <div class="d-flex justify-content-between">
                                    <p class="m-0">Campaign name</p>
                                    <p class="m-0 text-end">Ad_I 08 Jun 2023 | 14.59</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p class="m-0">Budget</p>
                                    <p class="m-0 text-end">Rs.100 Daily Budget</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p class="m-0">Duration</p>
                                    <p class="m-0 text-end">08 Jun 2023 - No end date</p>
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
                                        <p class="m-0">Catalog ID {{ activeInventory.catalogid }}</p>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-info w-100 my-3">Submit Campaign</button>
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
    components: { InventoryLink, ActiveLink, BottomNav },
    computed: {
        inventories() {
            return this.$store.getters['meesho/getInventories']
        },
        activeInventory() {
            return this.$store.getters['meesho/getActiveInventory']
        }
    },
    methods: {
        showInventory(inventory) {
            return this.$store.dispatch('meesho/selectInventory', inventory);
        },
        hideInventory() {
            return this.$store.dispatch('meesho/hideInventory');
        }
    }
}
</script>

<style lang="scss" scoped></style>