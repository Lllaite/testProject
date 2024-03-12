<template>
  <el-button circle size="small" icon="Refresh" />
  <el-button circle size="small" icon="FullScreen" />
  <el-button circle size="small" icon="Setting" />
  <img
    src="../../../../assets/images/logo.jpg"
    style="width: 20px; height: 20px; margin: 0 10px"
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

<script setup lang="ts" name="setting"></script>

<style scoped></style>
