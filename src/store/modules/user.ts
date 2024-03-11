// 用户相关pinia模块
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/userTypes'
import { setToken, getToken } from '@/utils/token'
import { routes } from '@/router/router'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: getToken() || '',
      MenuRoutes: routes, // 当前用户下包含的路由
    }
  },
  actions: {
    async userLogin(loginForm: loginForm) {
      const res: loginResponseData = await reqLogin(loginForm)
      if (res.code === 200) {
        this.token = res.data.token as string
        setToken(res.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
