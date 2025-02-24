<script>
export default {
    data(){
        return{
            isVisible: true,
        }
    }
}

</script>
<template>
<button @click="isVisible = !isVisible">Toggle Message</button>
<p v-show="isVisible">Hello, Vue!!</p>
</template>