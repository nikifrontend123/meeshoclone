<template>
    <div>
        <MenuLinks></MenuLinks>
        <SingleUploadLinks></SingleUploadLinks>
        <div class="container">
            <p class="fw-bold mt-2">Product Details</p>
            <div class="d-flex justify-content-between mt-4 align-items-center">
                <p>Weight (g)</p>
                <input type="number" class="form-control w-50 py-2" id="floatingInputGroup2" value="250" required>
                <!-- <div class="form-floating ">
                </div> -->
            </div>

            <div v-for="(data, index) in datas" :key="index" class="d-flex justify-content-between mt-2 align-items-center">
                <p>{{ data.name }}</p>
                <div class="border p-2 rounded w-50" required data-bs-toggle="offcanvas"
                    :data-bs-target="'#offcanvasProduct' + data.id" :aria-controls="'offcanvasProduct' + data.id">{{
                        selectedOption[index] }}</div>

                <div class="offcanvas offcanvas-start" tabindex="-1" :id="'offcanvasProduct' + data.id"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header border-bottom">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">{{ data.name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="input-group mb-3">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1"><i
                                    class="bi bi-search"></i></button>
                            <input type="text" class="form-control" :placeholder="'Search ' + data.name"
                                aria-label="Example text with button addon" aria-describedby="button-addon1">
                        </div>
                        <div v-for="(rad, radioIndex) in data.radio" :key="radioIndex" class="">
                            <div class="my-2" data-bs-dismiss="offcanvas">
                                <input type="radio" name="floatingInputValue" :id="'floatingInputValue' + radioIndex"
                                    :value="rad.name" v-model="selectedOption[index]">
                                <label :for="'floatingInputValue' + radioIndex" class="ms-1 mb-1">{{ rad.name }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p class="fw-bold mt-2">Price & Tax details</p>
            <div class="d-flex justify-content-between mt-4 align-items-center">
                <p class="w-50">Meesho Price</p>
                <input type="number" class="form-control w-50 py-2" id="floatingInputGroup2" value="250" required>
            </div>
            <div class="d-flex justify-content-between mt-4 align-items-center">
                <p class="w-50">Wrong/Defective Returns Price</p>
                <input type="number" class="form-control w-50 py-2" id="floatingInputGroup2" value="250" required>
            </div>
            <div class="d-flex justify-content-between mt-4 align-items-center">
                <p class="w-50">MRP</p>
                <input type="number" class="form-control w-50 py-2" id="floatingInputGroup2" value="250" required>
            </div>
        </div>
    </div>
</template>

<script>
import MenuLinks from './MenuLinks.vue';
import SingleUploadLinks from './SingleUploadLinks.vue';
export default {
    data() {
        return {
            datas: [
                {
                    id: '1',
                    name: 'Fabric',
                    radio: [
                        { name: 'Acrylic' },
                        { name: 'Art Silk' },
                        { name: 'Bamboo' },
                        { name: 'Chambray' },
                        { name: 'Chanderi Cotton' },
                    ]
                },
                {
                    id: '2',
                    name: 'Net Quantity (N)',
                    radio: [
                        { name: '1' },
                        { name: '2' },
                        { name: '3' },
                        { name: '4' },
                        { name: '5' },
                    ]
                },
                {
                    id: '3',
                    name: 'Neck',
                    radio: [
                        { name: 'Contrast Collar' },
                        { name: 'Cowl' },
                        { name: 'Dual Collar' },
                        { name: 'Henley' },
                        { name: 'High Neck' },
                    ]
                },
                {
                    id: '4',
                    name: 'Occasion',
                    radio: [
                        { name: 'Breach' },
                        { name: 'Causal' },
                        { name: 'Festive' },
                        { name: 'Formal' },
                        { name: 'Party' },
                    ]
                },
                {
                    id: '5',
                    name: 'Pattern',
                    radio: [
                        { name: 'Checked' },
                        { name: 'Colorblocked' },
                        { name: 'Dyed/Washed' },
                        { name: 'Embellished' },
                        { name: 'Embroidered' },
                    ]
                },
                {
                    id: '6',
                    name: 'Print Or Pattern Type',
                    radio: [
                        { name: '3D Print' },
                        { name: 'Abstract' },
                        { name: 'Animal' },
                        { name: 'Aztex' },
                        { name: 'Bohemian' },
                    ]
                },
                {
                    id: '7',
                    name: 'Sleeve Length',
                    radio: [
                        { name: 'Long Sleeves' },
                        { name: 'Short Sleeves' },
                        { name: 'Sleeveless' },
                        { name: 'Three-Quarter Sleeves' },
                    ]
                },
                {
                    id: '8',
                    name: 'Size',
                    radio: [
                        { name: 'XS' },
                        { name: 'S' },
                        { name: 'M' },
                        { name: 'L' },
                        { name: 'Free' },
                    ]
                },
            ],
            selectedOption: [
                'Select Fabrics',
                'Select Quantity',
                'Select Neck',
                'Select Occasion',
                'Select Pattern',
                'Select Print',
                'Select Sleeve Length',
                'Select Size',
            ],
        }
    },
    components: { MenuLinks, SingleUploadLinks },
    computed: {
        data() {
            return this.datas.filter(data => {
                return data.name.toLowerCase().includes(this.search.toLowerCase())
            })
        },

    },
}
</script>

<style lang="scss" scoped></style>