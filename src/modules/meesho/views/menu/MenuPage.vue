<template>
    <div style="padding-bottom: 70px;">
        <h5 class="p-2">Menu</h5>
        <div class="d-flex container border py-2">
            <div class="bg-light rounded-circle d-flex align-items-center justify-content-center"
                style="height: 60px; width: 60px;"><i class="bi bi-shop text-primary fs-5"></i>
            </div>
            <div class="ms-2">
                <p class="m-0">DNB FASHION</p>
                <div class="">
                    <span class="m-0 text-primary bg-light rounded px-1">3.8<sup><i
                                class="bi bi-star-fill"></i></sup></span>
                    <b class="ms-2">8618 </b><small> Ratings</small>
                    <b class="ms-2">81953 </b><small> Followers</small>
                </div>
            </div>
        </div>
        <div class="">
            <p class="text-secondary border ps-2 m-0">Manage Business</p>
            <div class="border container pt-2">
                <p><i class="bi bi-journal-arrow-up"></i> Catalog Upload</p>
                <p><i class="bi bi-wallet2"></i> Payments</p>
            </div>
        </div>
        <div class="">
            <p class="text-secondary border ps-2 m-0">Boost Sales</p>
            <div class="border container pt-2">
                <p><i class="bi bi-megaphone"></i> Advertisement</p>
                <p><i class="bi bi-percent"></i> Promotions</p>
                <p><i class="bi bi-wallet"></i> Price Recommendation</p>
            </div>
        </div>
        <div class="">
            <p class="text-secondary border ps-2 m-0">Performance</p>
            <div class="border container pt-2">
                <p><i class="bi bi-patch-check"></i> Quality Dashboard</p>
            </div>
        </div>
        <div class="">
            <p class="text-secondary border ps-2 m-0">More</p>
            <div class="border container pt-2">
                <p><i class="bi bi-play-btn"></i> Learn Hub</p>
                <p><i class="bi bi-bell"></i> Notice Board</p>
                <p><i class="bi bi-headset"></i> Support</p>
                <RouterLink to="/setting">
                    <p><i class="bi bi-gear"></i> Setting</p>
                </RouterLink>
                <p><i class="bi bi-box-arrow-right"></i> Logout</p>
            </div>
        </div>

        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/common/BottomNav.vue';

export default {
    components: { BottomNav }
}
</script>

<style lang="scss" scoped></style>