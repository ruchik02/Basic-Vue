<script>
export default {
    data(){
        return{
            status: "",
            isVisible: true
        }
    }
}

</script>
<template>
    <v-btn @click="status = 'success'" color="success">Success</v-btn>
    <v-btn @click="status = 'error'" color="error" >Error</v-btn>
    <v-btn @click="status = ''" color="grey">Reset</v-btn>
    <v-alert v-if="status === 'success'" type="success">Operation Successful!</v-alert>
    <v-alert v-else-if="status === 'error'" type="error">Operation failed!</v-alert>
    <v-alert v-else type="info">No Status Selected</v-alert>
    <v-btn @click="isVisible = !isVisible" color="primary">Toggle </v-btn>
    <v-card v-show="isVisible" class="mt-4" elevation="">
      <v-card-title>Visible Card</v-card-title>
      <v-card-text>This card is toggled using v-show.</v-card-text>
    </v-card>
</template>