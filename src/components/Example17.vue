<script>
export default {
  data() {
    return {
      isActive: false,
      isSuccess: true,
      isLarge: true,
    };
  },
  computed: {
    activeClass() {
      return this.isActive ? "bg-blue" : "bg-red";
    },
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<template>
  <v-container>
    <v-btn :class="activeClass" @click="toggleClass">Toggle Button</v-btn>
    <v-btn
      :class="{ 'text-white': true }"
      :color="isSuccess ? 'success' : 'red'"
      >Success Button</v-btn
    >
    <v-btn :class="['bg-primary', isLarge ? 'text-h5' : 'text-body-2']">
      Dynamic Button
    </v-btn>
  </v-container>
</template>
<style scoped>
.bg-blue {
  background-color: blue !important;
  color: white;
}
.bg-red {
  background-color: red !important;
  color: white;
}
</style>
