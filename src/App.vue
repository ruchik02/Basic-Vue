<script>
export default {
  data(){
    return{
      name: 'Ruchika Sharma',
      count: 0
    }
  },
  methods: {
    increment(){
      this.count++;

    },
    decrement(){
      this.count--;

    }
  }
}
</script>
<template>
  <h1>{{ name }}</h1>
  <h2>Counter: {{count  }} </h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>
<style scoped>
button {
  margin: 5px;
  padding: 12px;
  border: none;
  cursor: pointer;
}
</style>


