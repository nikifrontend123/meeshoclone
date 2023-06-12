<template>
    <div>
        <div class="d-flex gap-2">
            <div class="form-floating mb-3">
                <input type="date" class="form-control" v-model="startdate" id="floatingInput">
                <label for="floatingInput">Start Date</label>
            </div>
            <div class="form-floating mb-3">
                <input type="date" class="form-control" v-model="enddate" id="floatingInput2">
                <label for="floatingInput2">End Date</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            startdate:'',
            enddate:''
        }
    }

}
</script>

<style lang="scss" scoped></style>