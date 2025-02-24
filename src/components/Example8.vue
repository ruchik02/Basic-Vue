<script>
export default {
    data(){
        return{
            firstName: "Ruchika",
            lastName: "Sharma"
        }
    },
    computed: {
        fullName(){
            return this.firstName + " " + this.lastName
        }
    }
}
</script>
<template>
    <p>Full name: {{ fullName }}</p>
</template>