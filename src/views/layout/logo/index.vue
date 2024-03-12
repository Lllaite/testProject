<template>
  <div v-if="setting.logoHiddern" class="logo_title">
    <template v-if="!layoutSettingStore.fold">
      {{ setting.title }}
    </template>
  </div>
</template>

<script setup lang="ts" name="logo">
import setting from '@/setting'
import useLayoutSettingStore from '@/store/modules/setting'

const layoutSettingStore = useLayoutSettingStore()
</script>

<style lang="scss" scoped>
.logo_title {
  color: #1f1f1f;
  height: $base-menu-logo-height;
  line-height: $base-menu-logo-height;
  font-size: $base-logo-title-fontSize;
  text-align: center;
}
</style>
