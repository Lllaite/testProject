<template>
  <div class="tabber">
    <div class="tabber_left">
      <Breadcrumb />
    </div>
    <div class="tabber_right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts" name="tabber">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<style scoped lang="scss">
.tabber {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, white, black, white);
  .tabber_left {
    padding: 20px;
    display: flex;
    align-items: center;
    .el-breadcrumb {
      margin-left: 20px;
    }
  }
  .tabber_right {
    display: flex;
    align-items: center;
    padding: 20px;
  }
}
</style>
