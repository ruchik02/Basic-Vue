<script>
import SuccessCard from './SuccessCard.vue';
import ErrorCard from './ErrorCard.vue';
export default {
    components: {
        SuccessCard,
        ErrorCard
    },
    data(){
        return {
            view: "SuccessCard"
        }
    }
}
</script>
<template>
    <v-container>
        <v-btn @click="view = 'SuccessCard'" color="success">
            Show Success
        </v-btn>
        <v-btn @click="view = 'ErrorCard'" color="red">
            Show Error
        </v-btn>
        <component :is="view"></component>
    </v-container>
</template>