<template>
    <div class="">
        <div v-for="(s,index) in sla" :key="index" class="form-check">
            <input class="form-check-input" 
                    :type="s.type" 
                    :id="'flexCheckDefault' + index">
            <label class="form-check-label" :for="'flexCheckDefault' + index">
               {{ s.name }}
            </label>
        </div>
    </div>
</template>

<script>
export default {
name:'SlaPage',
data(){
    return{
        sla:[
            {type:'checkbox', name:'Breached'},
            {type:'checkbox', name:'Breaching Soon'},
            {type:'checkbox', name:'Others'},
        ]
    }
}

}
</script>

<style lang="scss" scoped></style>