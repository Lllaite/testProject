<template>
  <div class="layout_content">
    <div class="layout_slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <Menu :menuList="userStore.MenuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabber"></div>
    <div class="layout_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from '@/menu/index.vue'
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()

const handleOpen = () => {
  console.log('handleOpen')
}

const handleClose = () => {
  console.log('handleClose')
}
</script>

<style lang="scss" scoped>
.layout_content {
  width: 100%;
  height: 100%;
  background-color: black;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background-color;
    .scrollbar {
      width: 100%;
      height: calc(100% - $base-menu-logo-height);
    }
  }
  .layout_tabber {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - #{$base-menu-width});
    height: $base-tabber-height;
    background-color: #f1f1f1;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - #{$base-menu-width});
    height: calc(100% - #{$base-tabber-height});
    left: $base-menu-width;
    top: $base-tabber-height;
    background-color: #fff;
    padding: 20px;
    overflow: auto;
  }
}
</style>
