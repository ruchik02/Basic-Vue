<script>
export default {
    data(){
        return {
            data: "",
        }
    },
    watch: {
        data: {
      handler(newValue) {
        console.log("Data updated:", newValue);
      },
      immediate: true
    }
    }
}

</script>
<template>
    <p>data: {{ data }}</p>
</template>