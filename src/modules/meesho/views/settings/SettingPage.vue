<template>
    <div>
        <div class="d-flex justify-content-between container border-bottom py-2">
            <RouterLink to="menu">
                <b> <i class="bi bi-chevron-left me-2"></i>Setting</b>
            </RouterLink>
            <p class="m-0"> <i class="bi bi-bell mx-2"></i> <i class="bi bi-question-circle"></i></p>
        </div>
        <div v-for="(list, index) in lists" :key="index">
            <RouterLink :to="{ name: list.route }" :class="{ 'text-danger': currentRoute === list.route }">
                <div class="d-flex justify-content-between border-bottom py-2">
                    <p class="m-0"> <i :class="list.icon" class="mx-2"></i>{{ list.name }}</p>
                    <p class="m-0"> <i class="bi bi-chevron-right mx-2"></i></p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: [
                {
                    icon: 'bi bi-lock',
                    name: 'Change Password',
                    route: 'ChangePassword'
                },
                {
                    icon: 'bi bi-whatsapp',
                    name: 'WhatsApp Notifications',
                    route: 'WhatsappNotification'
                },
                {
                    icon: 'bi bi-file-earmark',
                    name: 'Legal and Policies',
                    route: 'Legal'
                },
                {
                    icon: 'bi bi-envelope',
                    name: 'Email notification',
                    route: 'EmailNotification'
                },
            ]
        }
    },
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    },

}
</script>

<style lang="scss" scoped></style>