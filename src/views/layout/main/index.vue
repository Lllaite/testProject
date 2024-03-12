<template>
  <!-- 路由组件出口的位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts" name="main">
import { watch, ref, nextTick } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting'

const layoutSettingStore = useLayoutSettingStore()
const flag = ref(true)
watch(
  () => layoutSettingStore.refresh,
  () => {
    flag.value = !flag.value
    nextTick(() => {
      flag.value = !flag.value
    })
  },
)
</script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
