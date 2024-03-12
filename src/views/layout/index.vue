<template>
  <div class="layout_content">
    <div
      class="layout_slider"
      :class="{ fold: layoutSettingStore.fold ? true : false }"
    >
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :default-active="route.path"
          :collapse="layoutSettingStore.fold"
        >
          <Menu :menuList="userStore.MenuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div
      class="layout_tabber"
      :class="{ fold: layoutSettingStore.fold ? true : false }"
    >
      <Tabber></Tabber>
    </div>
    <div
      class="layout_main"
      :class="{ fold: layoutSettingStore.fold ? true : false }"
    >
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts" name="layout">
import Logo from './logo/index.vue'
import Menu from '@/menu/index.vue'
import Main from './main/index.vue'
import Tabber from './tabber/index.vue'
import { useRoute } from 'vue-router'
import useUserStore from '@/store/modules/user'
import useLayoutSettingStore from '@/store/modules/setting'

let userStore = useUserStore()
let layoutSettingStore = useLayoutSettingStore()
const route = useRoute()

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
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background-color;
    .scrollbar {
      width: 100%;
      height: calc(100% - $base-menu-logo-height);
    }
    &.fold {
      width: $base-menu-fold-width;
    }
  }
  .layout_tabber {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - #{$base-menu-width});
    height: $base-tabber-height;
    background-color: #f1f1f1;
    &.fold {
      left: $base-menu-fold-width;
      width: calc(100% - #{$base-menu-fold-width});
    }
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
    &.fold {
      left: $base-menu-fold-width;
      width: calc(100% - #{$base-menu-fold-width});
    }
  }
}
</style>
