<template>
    <div>
        <div class="d-flex justify-content-between align-items-center bg-white text-dark px-2"
            style="height:63px;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
            <RouterLink to="/" class="py-2 me-2">
                <i class="bi bi-house-door fs-3 "></i>
                <span class="fw-bold mb-0 fs-5  ms-2">Meesho App</span>
            </RouterLink>
            <router-link to="/menu">
            </router-link>
            <i class="bi bi-list fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"></i>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
            style="width: 80vw !important;">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <div class="bg-light">
                    <!-- <h5 class="p-2">Menu</h5> -->
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
                            <router-link to="/menu/bulk-upload" class="text-decoration-none text-dark">
                                <p><i class="bi bi-journal-arrow-up"></i> Digital Studio</p>
                            </router-link>
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
                            <p><i class="bi bi-gear"></i> Setting</p>
                            <p><i class="bi bi-box-arrow-right"></i> Logout</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>



        <router-view />
    </div>
</template>

<script>
// import MenuPage from './views/menu/MenuPage.vue';
export default {
    // components: { MenuPage } 
};
</script>
  