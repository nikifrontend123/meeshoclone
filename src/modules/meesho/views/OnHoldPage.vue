<template>
    <div>
        <OrderLink></OrderLink>
        <div class="input-group mb-3 container mt-2">
            <button class="btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling" id="button-addon1">{{ selectedOption }}</button>
            <input type="search" class="form-control" placeholder="" aria-label="Example text with button addon"
                aria-describedby="button-addon1"> 
        </div>

        <div class="offcanvas offcanvas-bottom" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
            id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Select Search ID</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="container">
                    <div class="form-check fs-4">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="SKU ID" v-model="selectedOption" data-bs-dismiss="offcanvas">
                        <label class="form-check-label" for="flexRadioDefault1">
                            SKU ID
                        </label>
                    </div>
                    <div class="form-check fs-4">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                            value="MEESHO ID" v-model="selectedOption" data-bs-dismiss="offcanvas">
                        <label class="form-check-label" for="flexRadioDefault2">
                            MEESHO ID
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderLink from './OrderLink.vue';

export default {
    data() {
        return {

            selectedOption: 'Select'
        }
    },
    components: { OrderLink }
}
</script>

<style  scoped></style>