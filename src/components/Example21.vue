<script>
export default {
    data(){
        return {
            users: [
                {id:1, name: "Ruchika Sharma", age: 24},
                {id:2, name: "Riya", age: 23},
                {id:3, name: "Renu", age: 40},
                {id:4, name: "Ruchi", age: 20},
            ]
        }
    }
}

</script>
<template>
    <v-container>
        <v-row>
            <v-col v-for="user in users" :key="user.id" cols="12" sm="6" md="4">
                <v-card>
                    <v-card-title>{{ user.name }}</v-card-title>
                    <v-card-subtitle>Age: {{ user.age }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>