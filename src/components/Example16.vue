<script>
export default {
  data() {
    return {
      firstName: "Ruchika",
      lastName: "Sharma",
      searchUser: "",
      count:0,
      user: [
        { id: 1, name: "ruchi" },
        { id: 2, name: "priya" },
        { id: 3, name: "riya" },
        { id: 4, name: "samridhi" },
      ],
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(value) {
        const parts = value.split(" ");
        this.firstName = parts[0] || "";
        this.lastName = parts[1] || "";
      },
    },
    filterUser() {
      return this.user.filter((user) =>
        user.name.toLowerCase().includes(this.searchUser.toLowerCase())
      );
    },
    textColor(){
        return this.count > 5 ? 'red': 'black';
    }
  },
};
</script>
<template>
  <v-container>
    <v-text-field v-model="firstName" label="First Name"></v-text-field>
    <v-text-field v-model="lastName" label="Last Name"></v-text-field>
    <p>Full name: {{ fullName }}</p>
    <v-text-field v-model="searchUser" label="Search User"></v-text-field>
    <v-list>
      <v-list-item v-for="user in filterUser" :key="user.id">{{
        user.name
      }}</v-list-item>
    </v-list>
    <v-btn @click="count++">Inc</v-btn>
    <p :style="{color: textColor}">{{ count }}</p>
  </v-container>
</template>
