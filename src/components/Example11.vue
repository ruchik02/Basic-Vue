<script>
export default {
    data(){
        return{
            textColor: "blue",
            fontSize: 20,
        }
    }
}
</script>
<template>
    <p :style="{color: textColor, fontSize: fontSize + 'px'}">Dynamic styling</p>
</template>