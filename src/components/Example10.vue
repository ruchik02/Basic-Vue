<script>
export default {
    data(){
        return{
            isActive: true,
            hasError: false
        }
    }
}
</script>
<template>
    <p :class="{active: isActive, 'text-danger': hasError}">Styled Text</p>
</template>
<style scoped>
.active{
    font-weight: bold;
}
.text-danger{
  color: red;
}
</style>