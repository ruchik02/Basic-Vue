<script>
export default {
    data(){
        return{
            fruits: ["apple", "mango", "grapes", "orange"],
            colors: ["red", "green", "pink","black"]
        }
    }
}
</script>
<template>
    <h1>Fruits Item:</h1>
    <ul>
        <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>
    <h3>Favourite Colors:</h3>
    <ul>
        <li v-for="(color,index) in colors" :key="index">{{ color }}</li>
    </ul>
    
</template>