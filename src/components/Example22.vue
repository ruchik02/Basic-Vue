<script>
export default {
    data() {
        return {
            name: "",
        }
    },
    methods:{
        logInput(event){
            console.log('user input:', event);

        }
    }
}
</script>
<template>
    <v-text-field label="Enter name" v-model="name" @input="logInput"></v-text-field>
</template>