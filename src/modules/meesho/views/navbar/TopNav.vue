<template>
    <div>
        <button class="btn border btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop">
            <i class="bi bi-justify"></i>
        </button>

        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <div>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>