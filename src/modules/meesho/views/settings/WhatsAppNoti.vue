<template>
    <div>
        <div class="d-flex container border-bottom py-2">
            <RouterLink to="/setting">
                <b> <i class="bi bi-chevron-left me-2"></i>WhatsApp Notifiaction</b>
            </RouterLink>
        </div>
        <div class="container d-flex align-items-center">
            <i class="b- bi-whatsapp text-success fs-2"></i>
            <b class="text-muted ms-2">Recieve notification on WhatsApp</b>
        </div>
        <div class="w-100 d-flex  form-control">
            <input type="text" readonly placeholder="+91" class="w-25" />
            <input class="w-75 ms-2 p-2" type="number" placeholder="Mobile Number" v-model="phoneNumber"
                @input="checkPhoneNumber" />
        </div>
        <div class="d-flex justify-content-center w-100 position-absolute bottom-0 my-3">
            <button :disabled="disableButton" class="btn btn-success w-100 mx-2">Subscribe</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phoneNumber: '',
            disableButton: true
        };
    },
    methods: {
        checkPhoneNumber() {
            const number = /^[0-9]{10}$/;
            if (number.test(this.phoneNumber)) {
                this.disableButton = false;
            } else {
                this.disableButton = true;
            }
        }
    }

}
</script>

<style lang="scss" scoped></style>       
    
