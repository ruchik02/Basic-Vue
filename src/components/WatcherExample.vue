<script>
export default {
    data() {
        return {
            query: "",
            results: "",
        }
    },
    watch: {
    query(newQuery) {
      this.fetchData(newQuery);
    },
  },
  methods: {
    fetchData(query) {
      if (!query) {
        this.results = "";
        return;
      }
      setTimeout(() => {
        this.results = `Results for "${query}"`; // Simulating an API call
      }, 500);
    }
    }
}
</script>
<template>
    <v-container>
        <v-text-field v-model="query" label="Search...."></v-text-field>
        <p>Results: {{ results }}</p>
    </v-container>
</template>