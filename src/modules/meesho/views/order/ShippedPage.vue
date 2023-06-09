<template>
    <div style="padding-bottom: 100px;">
        <OrderLink></OrderLink>
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
                        <input class="form-check-input" type="checkbox" name="Order" :id="'Order' + order.id">
                        <label class="form-check-label" :for="'Order' + order.id">
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
                                    <p class="m-0 mb-1">Quntity</p>
                                    <p class="m-0 mb-1">Size</p>
                                    <p class="m-0 mb-1">SKU ID</p>
                                    <p class="m-0 mb-1">Meesho ID</p>
                                    <p class="m-0 mb-1">Sub-Order ID</p>
                                    <p class="m-0 mb-1">Label</p>
                                </div>
                                <div class="d-flex flex-column">
                                    <p class="m-0 mb-1 text-end">{{ order.qty }} Unit</p>
                                    <p class="m-0 mb-1 text-end">{{ order.size }}</p>
                                    <p class="m-0 mb-1 text-end">{{ order.skuid }}</p>
                                    <p class="m-0 mb-1 text-end">{{ order.meeshoid }}</p>
                                    <p class="m-0 mb-1 text-end">{{ order.suborderid }}</p>
                                    <p class="m-0 mb-1 text-end text-success">{{ order.label }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-warning d-flex justify-content-between mb-2">
                        <p class="m-0 p-1">Dlivery Patner</p>
                        <p class="m-0 p-1 fw-bold">{{ order.partner }}</p>
                    </div>
                </div>
                <!-- <div class="d-flex justify-content-between align-items-center py-2 border-top">
                    <p>Disptached Date <span class="text-danger">{{ order.date }}</span></p>
                    <button class="btn btn-secondary">Cancel</button>
                    <button class="btn btn-primary">Accept</button>
                </div> -->
            </div>
        </div>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/common/BottomNav.vue';
import OrderLink from './OrderLink.vue';

export default {
    name: "ShippedPage",
    components: { OrderLink, BottomNav },
    computed:{
        orders(){
            return this.$store.getters['meesho/getOrders']
        }
    }
}
</script>

<style lang="scss" scoped></style>