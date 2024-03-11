<template>
  <div v-if="setting.logoHiddern" class="logo_title">{{ setting.title }}</div>
</template>

<script setup lang="ts">
import setting from '@/setting'
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
