<template>
    <div>
        <div class="d-flex container border-bottom py-2">
            <RouterLink to="/setting">
                <b> <i class="bi bi-chevron-left me-2"></i>Change Password</b>
            </RouterLink>
        </div>
        <div class="w-100 d-flex flex-column form-control">
            <input class="py-2 my-2" type="text" placeholder="Current Password">
            <input class="py-2 my-2" type="password" placeholder="New Password">
        </div>
        <div class="container">
            <p class="m-0 text-muted"><i class="bi bi-dot fs-4"></i>Minimum 8 characters</p>
            <p class="m-0 text-muted"><i class="bi bi-dot fs-4"></i>1 Capital letter (A-Z)</p>
            <p class="m-0 text-muted"><i class="bi bi-dot fs-4"></i>1 Special Characters (@#$%!^&*)</p>
            <p class="m-0 text-muted"><i class="bi bi-dot fs-4"></i>1 Number</p>
        </div>
        <div class="w-100 d-flex flex-column form-control">
            <input class="py-2 my-2" type="text" placeholder="Re-type New Password">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>