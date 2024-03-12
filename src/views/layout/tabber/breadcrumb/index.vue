<template>
  <el-icon @click="changeIcon" style="margin-right: 10px">
    <component :is="layoutSettingStore.fold ? 'Expand' : 'Fold'" />
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in route.matched"
      :key="index"
      v-show="item.meta.title"
      style="align-items: center"
      :to="item.path"
    >
      <el-icon style="margin: 0 5px; vertical-align: center">
        <component :is="item.meta.icon" />
      </el-icon>
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts" name="breadcrumb">
import { useRoute } from 'vue-router'
import useLayoutSettingStore from '@/store/modules/setting'

const route = useRoute()
const layoutSettingStore = useLayoutSettingStore()

const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold
}
</script>

<style scoped></style>
