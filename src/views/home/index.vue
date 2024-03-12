<template>
  <div class="main_content">
    {{ userStore.username }}
    <el-icon>
      <Search />
    </el-icon>
    <el-icon :size="20">
      <Edit />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user'
import { onMounted } from 'vue'

const userStore = useUserStore()
onMounted(() => {
  userStore.getUserInfo()
  console.log('userStore', userStore)
})
</script>

<style lang="scss" scoped>
.main_content {
  height: 1400px;
}
</style>
