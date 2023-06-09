<template>
    <div>
        <InventoryLink></InventoryLink>
        <div class="">
            <button class="btn btn-light border w-100"><i class="bi bi-funnel"></i>Filter</button>
        </div>

        <div class="">
            <button class="btn btn-light border w-100 text-start my-2 rounded-0">CATALOGS:ACTIVATION PENDING</button>
        </div>

        <div>
            <div class="container mb-2 border" v-for="(inventory, index) in inventories" :key="index">
                <div class="w-100">
                    <h6 class="my-2">{{ inventory.name }}</h6>
                    <div class="d-flex">
                        <div class="w-30">
                            <img :src="inventory.img" style="height:100px; width:100px">
                        </div>
                        <div class="ms-2 w-75">
                            <div class="d-flex justify-content-between mb-1">
                                <p class="m-0">Catalog ID</p>
                                <p class="m-0 text-end">{{ inventory.catalogid }}</p>
                            </div>
                            <div class="d-flex justify-content-between mb-1">
                                <p class="m-0">Category</p>
                                <p class="m-0 text-end">{{ inventory.category }}</p>
                            </div>
                            <div class="d-flex justify-content-between mb-1">
                                <p class="m-0">SKUs</p>
                                <p class="m-0 text-end">{{ inventory.sku }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center py-2 border-top">
                    <div class="">
                        <p class="m-0">Activation <span class="text-danger">{{ inventory.activation }}</span></p>
                        <p class="m-0">It will be made live soon</p>
                    </div>
                    <button class="btn btn-primary">View Products</button>
                </div>
            </div>



        </div>

        <BottomNav></BottomNav>
    </div>
</template>

<script>
import InventoryLink from './InventoryLink.vue';
import BottomNav from '@/components/common/BottomNav.vue';
export default {
    components: { InventoryLink, BottomNav },
    computed:{
        inventories(){
            return this.$store.getters['meesho/getInventories']
        }
    }
}
</script>

<style lang="scss" scoped></style>