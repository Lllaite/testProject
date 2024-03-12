<template>
  <el-button circle size="small" icon="Refresh" @click="updateRefearsh" />
  <el-button circle size="small" icon="FullScreen" @click="fullScreen" />
  <el-button circle size="small" icon="Setting" />
  <img
    :src="userStore.avatar"
    style="width: 20px; height: 20px; margin: 0 10px; border-radius: 50%"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts" name="setting">
import useLayoutSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
const layoutSettingStore = useLayoutSettingStore()

const updateRefearsh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh
}
const fullScreen = () => {
  // 判断用户当前是否全屏，如果是则退出全屏，否则进入全屏
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}
</script>

<style scoped></style>
