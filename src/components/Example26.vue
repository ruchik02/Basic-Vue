<script>
export default {
    data() {
        return {
            volume: 50,
            status: "Normal"
        }
    },
    watch: {
    volume(newVal) {
      if (newVal > 80) this.status = "Too Loud!";
      else if (newVal < 20) this.status = "Too Low!";
      else this.status = "Normal";
    }
  }
}
</script>
<template>
    <v-container>
        <v-slider v-model="volume" min="0" max="100" label="Volume"></v-slider>
        <p>Volume: {{ volume }}</p>
        <p>Status: {{ status }}</p>
    </v-container>
</template>