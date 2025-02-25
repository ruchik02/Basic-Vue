<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
      },
      rules: {
        required: (value) => !!value || "This field is required",
        minLength: (value) => (value.length >= 3) || "Minimum 3 characters required",
      },
      submittedData: null,
    };
  },
   methods: {
    submitForm() {
      this.submittedData = { ...this.formData };
      console.log("Form Submitted:", this.submittedData);
    },
}
};
</script>
<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field label="Name" v-model="formData.name" :rules="[rules.required, rules.minLength]"></v-text-field>
      <v-text-field
        label="Email"
        v-model="formData.email"
        type="email"
        :rules="[rules.required]"
      ></v-text-field>

      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>

    <p>Submitted Data: {{ submittedData }}</p>
  </v-container>
</template>
