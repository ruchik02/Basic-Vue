import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import App from './App.vue'

// Create a Vuetify instance
const vuetify = createVuetify({components})

// Create the Vue app and use Vuetify
const app = createApp(App)
app.use(vuetify)
app.mount('#app')
