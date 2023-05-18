import { createApp } from 'vue'
import {VueMasonryPlugin} from 'vue-masonry';
import App from './App.vue'
import naive from 'naive-ui'

const app = createApp(App)
app.use(naive)
app.use(VueMasonryPlugin)
app.mount('#app')
