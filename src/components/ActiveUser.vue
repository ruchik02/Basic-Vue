<script>
export default {
    data(){
        return  {
            showActiveOnly: false,
            users:[
                {id: 1, name: 'ruchika', active: true},
                {id: 2, name: 'ruchi', active: true},
                {id: 3, name: 'riya', active: false},
            ]
        }
    },
    computed: {
    filteredUsers() {
      return this.showActiveOnly
        ? this.users.filter(user => user.active)
        : this.users;
    }
  }

}
</script>
<template>
    <v-container>
        <v-switch v-model="showActiveOnly" label="Show Active Users Only"></v-switch>
        <v-list>
      <v-list-item v-for="user in filteredUsers" :key="user.id">
        <v-list-item-content>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
          <v-list-item-subtitle>
            Status: {{ user.active ? "Active" : "Inactive" }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-container>
</template>