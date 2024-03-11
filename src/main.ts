import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// avg插件配置代码
import 'virtual:svg-icons-register'
import '@/styles/index.scss'
import GlobalComponent from '@/components'
import router from './router'
import pinia from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.use(GlobalComponent)
app.mount('#app')
