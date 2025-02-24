<script>
export default {
    data(){
        return{
            users: ["ruchika", "rohit", "kittu", "avi"]
        }
    },
    methods:{
        sayHello(){
            alert("Hello, how are you?");
        }
    }
}
</script>
<template>
  <ul>
    <li v-for="(user,index) in users" :key="index">
        {{ index + 1 }}. {{ user }}
    </li>
  </ul>
  <button @click="sayHello">Clicking</button>
</template>
