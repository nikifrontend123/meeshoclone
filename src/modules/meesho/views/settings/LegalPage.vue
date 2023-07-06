<template>
    <div>
        <div class="d-flex container border-bottom py-2">
            <RouterLink to="/setting">
                <b> <i class="bi bi-chevron-left me-2"></i>Legal and Policies</b>
            </RouterLink>
        </div>
        <div class="d-flex justify-content-between border py-2 container" v-for="(list, index) in lists" :key="index">
            <p class="m-0">{{ list.name }}</p>
            <i class="bi bi-chevron-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: [
                {
                    name: 'Anti Phishing Policy'
                },
                {
                    name: 'PrivacyPolicy'
                },
                {
                    name: 'Intellectual Property Policy'
                },
                {
                    name: 'Supplier Agreement'
                },
                {
                    name: 'Additional Supplier Policies'
                },
                {
                    name: 'Suplier Deactivation Policy'
                },
                {
                    name: 'Prohibited and restricted Products list'
                },
                {
                    name: 'Terms and Conditions'
                },
                {
                    name: 'Supplier referral policy'
                },
                {
                    name: 'T&Cs - Courier Partner Preference and Claims'
                },
            ]
        }
    }

}
</script>

<style lang="scss" scoped></style>