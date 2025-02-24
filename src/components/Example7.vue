<script>
export default {
    data(){
        return{
            message: ''
        }
    }
}
</script>
<template>
    <input v-model="message" placeholder="type something..." />
    <p>you typed: {{ message }} </p>
</template>