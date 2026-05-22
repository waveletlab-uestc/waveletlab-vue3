import { createApp } from 'vue'
import { ElButton } from 'element-plus'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-button.css'
import './assets/styles.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component(ElButton.name, ElButton)
app.use(router)
app.mount('#app')
