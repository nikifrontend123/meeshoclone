<template>
    <div style="padding-bottom: 100px;">
        <div class="d-flex justify-content-between container p-2">
            <b>Order/Shipped</b>
            <b><i class="bi bi-search"></i><i class="bi bi-question-circle ms-2"></i></b>
        </div>

        <OrderLink></OrderLink>
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

export default {
    name: "ShippedPage",
    components: { OrderLink, BottomNav },
    computed: {
        orders() {
            return this.$store.getters['meesho/getOrders']
        }
    }
}
</script>

<style lang="scss" scoped></style>