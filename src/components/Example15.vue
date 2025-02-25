<script>
export default {
  data(){
    return{
      count: 0,
      message: "Hello, vuetify!!",
      sliderValue: 50,
      user: {
        name: "Ruchika Sharma",
        age: 24
      },
      celsius: 0,
      fah: 32,
      status: "Low",
    }
  },
  computed: {
    reversedMessage(){
        return this.message.split("").reverse().join("");
    }
  },
  watch: {
    sliderValue(newValue){
        console.log("Slider changed to:", newValue);
    },
    user: {
        handler(newValue) {
            console.log("User data changed:", newValue);
        },
        deep: true
    },
    count(newValue){
        if(newValue> 5){
            this.status = "High";
        } else {
            this.status = "Low";
        }
    }
  },
  methods: {
    convertToFah(){
        this.fah = (this.celsius * 9) / 5 + 32;
    }
  }
}
</script>
<template>
  <v-container class="text-center">
    <v-btn @click="count++" color="primary">
      Increase
    </v-btn>
    <p>{{ count }}</p>
    <v-text-field v-model="message" label="type something"></v-text-field>
    <p>Reversed Message: {{ reversedMessage }} </p>
     <v-slider v-model="sliderValue" min="0" max="100" label="Adjust value"></v-slider>
     <p>Value: {{ sliderValue }}</p>
     <v-text-field v-model="user.name" label="Name"></v-text-field>
     <v-text-field v-model="user.age" type="number" label="Age"></v-text-field>
     <v-text-field v-model.number="celsius" label="Celsius"></v-text-field>
     <v-btn @click="convertToFah" color="success">Convert</v-btn>
     <p>Fah: {{ fah }}</p>
     <v-btn @click="count++" color="error">+</v-btn>
     <p>count: {{count  }}</p>
     <p>status: {{ status }}</p>
  </v-container>
</template>