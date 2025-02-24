<script>
export default {
    data(){
        return{
            activeTab: "home"
        }
    }
}
</script>
<template>
<button @click="activeTab ='home'">Home</button>
<br/> <br/>
<button @click="activeTab ='profile'">Profile</button>
<div v-show="activeTab === 'home'">
    <h2> Home Page</h2>
</div>
<div v-show="activeTab === 'profile'">
    <h2>Profile Page</h2>
</div>
</template>