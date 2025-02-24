<script>
export default {
    data(){
        return{
            name: ""
        }
    }
}
</script>
<template>
    <input v-model="name" placeholder="Enter your name">
    <p>Hello, {{ name }}</p>
</template>