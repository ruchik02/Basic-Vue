<script>
export default {
    data(){
        return{
            user: {
                name: "Ruchika Sharma",
                age: 25
            }
        }
    }
}
</script>
<template>
    <div class="user-card">
        <slot :user="user"></slot>
    </div>
</template>