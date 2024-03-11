<script setup lang="ts">
import { User, Lock, Warning } from '@element-plus/icons-vue'
import { Ref, reactive, ref } from 'vue'
import Identify from '@/components/VerifyCode/index.vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'

let loading = ref(false)
let router = useRouter()
let userStore = useUserStore()

const identifyCode = ref('1234')
const identifyCodes = ref('1234567890abcdefjhijklinopqrsduvwxyz')

// 重置验证码
const refreshCode = () => {
  identifyCode.value = ''
  makeCode(identifyCode, 4)
}

const makeCode = (_o: Ref<any>, l: number) => {
  for (let i = 0; i < l; i++) {
    identifyCode.value +=
      identifyCodes.value[randomNum(0, identifyCodes.value.length)]
  }
}

const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

let loginForms = ref()

const loginForm = reactive({
  username: 'admin',
  password: 'atguigu123',
  verifyCode: '1234',
})

const validatorUsername = (_rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('请输入账号'))
  } else {
    callback()
  }
}

const validatorPassword = (_rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('请输入密码'))
  } else if (value.length < 6 || value.length > 16) {
    callback(new Error('密码应为6~16位的任意组合'))
  } else {
    callback()
  }
}

const validatorVerifyCode = (_rule: any, value: any, callback: any) => {
  console.log(value, identifyCode.value)

  if (value.length === 0) {
    callback(new Error('请输入验证码'))
  } else if (value.length < 4) {
    callback(new Error('请输入正确的验证码'))
  } else if (identifyCode.value !== value) {
    callback(new Error('请输入正确的验证码'))
  } else if (identifyCode.value === value) {
    callback()
  }
}

const rules = {
  username: [
    {
      trigger: 'change',
      validator: validatorUsername,
    },
  ],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
  verifyCode: [
    {
      trigger: 'blur',
      validator: validatorVerifyCode,
    },
  ],
}

const login = async () => {
  loading.value = true
  try {
    await userStore.userLogin(loginForm)
    ElNotification({
      type: 'success',
      title: '登录成功',
      message: '欢迎回来，' + getTime() + '好！',
    })
    loading.value = false
    router.push('/')
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      title: '登录失败',
      message: (error as Error).message,
    })
  }
}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-card class="login_form">
          <h1>Vue-Admin</h1>
          <el-form :model="loginForm" :rules="rules" ref="loginForms">
            <el-form-item prop="username">
              <el-input
                :prefix-icon="User"
                v-model="loginForm.username"
                clearable
                placeholder="Username"
                size="large"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                :prefix-icon="Lock"
                show-password
                v-model="loginForm.password"
                size="large"
                placeholder="Password"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item prop="verifyCode">
              <el-input
                :prefix-icon="Warning"
                show-password
                v-model="loginForm.verifyCode"
                placeholder="VerifyCode"
                size="large"
                maxlength="4"
              >
                <template #append>
                  <Identify :identifyCode="identifyCode" @click="refreshCode" />
                </template>
              </el-input>
            </el-form-item>
          </el-form>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: fixed;
  .login_form {
    position: relative;
    width: 55%;
    top: 25vh;
    left: 10vw;
    padding: 10px;
    background: transparent;
    h1 {
      background: linear-gradient(to right, blue, rgb(35, 60, 70));
      //-webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 40px;
      text-align: center;
      font-weight: 700;
      margin-bottom: 40px;
      margin-top: -10px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
.el-card {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}
</style>
