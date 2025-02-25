<script>
export default {
    data() {
        return {
            textValue: "",
            message: "",
            selectedOption: null,
            isChecked: true,
            gender: "",
            age: 24,
        }
    }
}
</script>
<template>
    <v-container>
        <v-text-field label="Text" v-model="textValue"></v-text-field>
        <v-textarea label="Message" v-model="message"></v-textarea>
        <v-select 
      label="Select Option" 
      :items="['Vue', 'React', 'Angular']" 
      v-model="selectedOption"
    ></v-select>
    <v-checkbox label="Accept Terms" v-model="isChecked"></v-checkbox>
    <v-radio-group v-model="gender">
      <v-radio label="Male" value="Male"></v-radio>
      <v-radio label="Female" value="Female"></v-radio>
    </v-radio-group>
    <v-slider v-model="age" label="Age"></v-slider>

    <p>Text: {{ textValue }}</p>
    <p>Message: {{ message }}</p>
    <p>Selected Option: {{ selectedOption }}</p>
    <p>Checkbox Checked: {{ isChecked }}</p>
    <p>Selected Gender: {{ gender }}</p>
    <p>Age: {{ age }}</p>
    </v-container>
</template>