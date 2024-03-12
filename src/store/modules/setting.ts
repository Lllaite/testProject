import { defineStore } from 'pinia'

const useLayoutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, // 是否折叠菜单
      refresh: false, // 是否刷新页面
    }
  },
})

export default useLayoutSettingStore
