import { defineStore } from 'pinia'

const useLayoutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, // 是否折叠菜单
    }
  },
})

export default useLayoutSettingStore
