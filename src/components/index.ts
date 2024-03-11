import SvgIcon from './SvgIcon/index.vue'

import type { App } from 'vue'

const allGlobalComponents = {
  SvgIcon,
}

export default {
  // export all components
  install(app: App) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key])
    })
  },
}
