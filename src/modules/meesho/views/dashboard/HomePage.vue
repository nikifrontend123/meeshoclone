<template>
    <div>
        <div class="p-2">
            <div class="d-flex justify-content-between ">
                <h5 class="m-0">Welcome back, DNB FASHION</h5>
                <!-- <i class="bi bi-question-circle d-flex fs-5 text-secondary"></i> -->
                <TopNav></TopNav>
            </div>
            <small class="text-secondary">Manage and grow your business</small>
        </div>
        <div class="container py-2">
            <p class="lead mb-2 fw-bold">To do list</p>
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col" v-for="(stat, index) in stats" :key="index">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text text-uppercase text-secondary mb-0" style="font-size: 13px;">{{
                                stat.name }}</p>
                            <h4 class="card-title text-primary">{{ stat.value }} </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container py-2" style="margin-bottom: 5rem;">
            <p class="lead m-0 fw-bold">Chart</p>
            <small class="text-secondary">Learn to operate and grow your business on meesho</small>
            <div class="">

            </div>
        </div>
        <div class="container py-2" style="margin-bottom: 5rem;">
            <p class="lead m-0 fw-bold">Useful Links</p>
            <small class="text-secondary">Learn to operate and grow your business on meesho</small>
            <div class="">
                <div class="d-flex justify-content-between align-items-center">
                    <p><i class="bi bi-youtube text-danger me-2 fs-4"></i>Supplier Hub on Meesho app</p>
                    <i class="bi bi-chevron-right"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p><i class="bi bi-truck me-2 fs-4"></i>Pricing & Commission</p>
                    <i class="bi bi-chevron-right"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p><i class="bi bi-percent me-2 fs-4"></i>Dellivery & Returns</p>
                    <i class="bi bi-chevron-right"></i>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p><i class="bi bi-megaphone me-2 fs-4"></i>Smart Campaign</p>
                    <i class="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/common/BottomNav.vue';
import TopNav from '../navbar/TopNav.vue';

export default {
    components: { BottomNav, TopNav },
    computed: {
        stats() {
            return this.$store.getters['meesho/getDashboardStats']
        }
    },
    data() {
        return {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Data 1',
                        backgroundColor: 'rgba(0, 123, 255, 0.5)',
                        borderColor: 'rgba(0, 123, 255, 1)',
                        data: [12, 19, 3, 5, 2, 3],
                    },
                    {
                        label: 'Data 2',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        data: [2, 3, 20, 5, 1, 4],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        };
    },
}
</script>

<style lang="scss" ></style>