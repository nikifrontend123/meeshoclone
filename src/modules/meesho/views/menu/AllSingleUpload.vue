<template>
    <div>
        <MenuLinks></MenuLinks>
        <SingleUploadLinks></SingleUploadLinks>

        <div class="container mt-4">
            <select class="form-select" aria-label="Default select example">
                <option selected>Select Category</option>
                <option value="1">Men</option>
                <option value="2">Women</option>
                <option value="3">Kids</option>
                <option value="4">Home & Living</option>
                <option value="5">Mobile & Tablets</option>
            </select>

            <div class="mt-4 mb-2">

                <p class="m-0 text-muted">Product Image</p>
                <small class="m-0 text-muted">Upload the same product from different sides</small>

            </div>
            <div class="text-primary fw-bold border rounded bg-light d-flex flex-column align-items-center justify-content-center"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasUpload" aria-controls="offcanvasUpload"
                style="width: 100px; height: 100px;">
                <i class="bi bi-upload fs-3"></i>
                <span>Upload</span>
            </div>

            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasUpload"
                aria-labelledby="offcanvasUploadLabel" style="height: 80vh;">
                <div class="offcanvas-header border-bottom">
                    <h5 class="offcanvas-title" id="offcanvasUploadLabel">Product Image Upload</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Image upload guideline</p>
                    <div class="">
                        <i class="bi bi-x-circle-fill fs-3 text-danger"></i>
                        <span class="ms-2 text-danger" style="font-weight: 500;font-size: 12px;">Not Allowed</span>
                        <div class="d-flex gap-3">
                            <div class="">
                                <p>Blur/Unclear Image</p>
                                <img src="https://static.meeshosupply.com/supplier-new/catalog-not-allowed-one.png"
                                    style="height: 112px; width: 102px;">
                            </div>
                            <div class="">
                                <p>Image with Watermark/Price/Logo</p>
                                <img src="https://static.meeshosupply.com/supplier-new/catalog-not-allowed-two.png"
                                    style="height: 112px; width: 102px;">
                            </div>
                        </div>
                    </div>
                    <div class="mt-2">
                        <i class="bi bi-check-circle-fill fs-3 text-success"></i>
                        <span class="ms-2 text-success" style="font-weight: 500;font-size: 12px;">Not Allowed</span>
                        <div class="d-flex gap-3">
                            <div class="">
                                <p>Same Product front</p>
                                <img src="https://static.meeshosupply.com/supplier-new/catalog-allowed-one.png"
                                    style="height: 112px; width: 102px;">
                            </div>
                            <div class="">
                                <p>Same Product back</p>
                                <img src="https://static.meeshosupply.com/supplier-new/catalog-allowd-two.png"
                                    style="height: 112px; width: 102px;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="offcanvas-footer p-3" style="background-color: #e8e8e8;">
                    <p class="fw-bold">Select Image</p>
                    <AvatarPage></AvatarPage>
                    <p class="m-0">Gallery</p>
                </div>
            </div>

            <div class="d-flex justify-content-between align-items-center mt-4">
                <p>Product Name</p>
                <textarea rows="3" class="form-control w-50" placeholder="e.g. Solid"></textarea>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-4">
                <p>Product Description</p>
                <textarea rows="3" class="form-control w-50" placeholder="e.g. Solid"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import MenuLinks from './MenuLinks.vue';
import SingleUploadLinks from './SingleUploadLinks.vue';
import AvatarPage from './AvatarPage.vue';
export default {
    components: { MenuLinks, SingleUploadLinks, AvatarPage }
}
</script>

<style lang="scss" scoped></style>