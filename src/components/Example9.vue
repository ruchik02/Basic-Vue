<script>
export default {
    data(){
        return{
            message: 'Hello vue!!'
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split("").reverse().join("");
        }
    }
}
</script>
<template>
   <p>{{ message }}</p>
   <button @click="reverseMessage">Reverse</button>
</template>