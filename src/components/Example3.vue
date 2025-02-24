<script>
export default {
    data(){
        return {
            imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
    }
}
</script>
<template>
    <!-- short hand v-bind:src="imageUrl" -->
    <img :src="imageUrl" alt="logo of car" class="img"/>
</template>
<style scoped>
.img{
    width: 200px;
    height: 200px;
}
</style>