<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    handleDialog(value) {
      console.log("Dialog state changed:", value);
    },
  },
};
</script>
<template>
  <v-dialog v-model="dialog" @update:modelValue="handleDialog">
    <v-card>
      <v-card-title>Dialog Example</v-card-title>
      <v-card-actions>
        <v-btn @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-btn @click="dialog = true">Open Dialog</v-btn>
</template>
