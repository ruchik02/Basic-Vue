<script>
export default {
    data() {
        return {
            user: {name: "Ruchika", age: 24},
            message: ""
        }
    },
    watch:{
        user: {
      handler(newVal) {
        this.message = `User updated: ${newVal.name}, Age: ${newVal.age}`;
      },
      deep: true
    }
    }
}
</script>
<template>
    <v-container>
        <v-text-field v-model="user.name" label="Name"></v-text-field>
        <v-text-field v-model="user.age" label="Age" type="number"></v-text-field>
        <p>updated: {{ message }}</p>
    </v-container>
</template>