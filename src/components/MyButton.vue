<script>
export default {
    props: ["label"],
    methods: {
        clickHandler() {
            alert("Button Clicked!!");
        },
    },
};
</script>
<template>
    <button class="btn" @click="clickHandler">{{ label }}</button>
</template>
<style scoped>
.btn {
    padding: 10px 20px;
    background: blue;
    color: white;
    border-radius: 5px;
}
</style>
