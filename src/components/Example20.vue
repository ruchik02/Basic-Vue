<script>
import LoginForm from './LoginForm.vue';
import SignupForm from './SignupForm.vue';
export default {
    components:{
        LoginForm,
        SignupForm
    },
    data(){
        return {
            activeForm: "LoginForm"
        }
    }
}
</script>
<template>
     <v-btn @click="activeForm = 'LoginForm'" color="primary">Login</v-btn>
     <v-btn @click="activeForm = 'SignupForm'" color="green">Sign Up</v-btn>
     <keep-alive>
      <component :is="activeForm"></component>
    </keep-alive>
</template>