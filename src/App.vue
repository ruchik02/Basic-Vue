<script>
import MyButton from './components/MyButton.vue';
import Example1 from './components/Example1.vue';
export default {
  components:{
    MyButton,
    Example1
  },
  data() {
    return {
      name: 'Ruchika Sharma',
      count: 0,
      status: 'pending',
      result: true,
      message: "",
    }
  },
  methods: {
    increment() {
      this.count++;

    },
    decrement() {
      this.count--;

    },
    changeMessage() {
      this.name = "You clicked the button!!"
    }
  }
}
</script>
<template>
  <h1>{{ name }}</h1>
  <h2>Counter: {{ count }} </h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="changeMessage">Click Me</button>
  <p v-if="status === 'active'">User status is active. </p>
  <p v-else-if="status === 'pending'">User status is pending. </p>
  <p v-else>User status is not active. </p>
  <p v-if="result">Result is true. </p>
  <p v-else> Result is false. </p>
  <MyButton label ="Click" />
  <br> <br>
  <input v-model="message">
  <p>You typed: {{ message }}</p>
  <br>
  <Example1 />

</template>
<style scoped>
button {
  margin: 5px;
  padding: 12px;
  border: none;
  cursor: pointer;
}
</style>
