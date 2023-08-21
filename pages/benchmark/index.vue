<template>
  <div class="menu-page">
    <div class="status-bar">
      状态栏
    </div>
    <div class="desktop">content</div>
    <div class="dock-bar">
      bottom
    </div>
  </div>
</template>

<script lang="ts" setup>
import Vue from 'vue'
import {ref} from "vue";
import MenuItem from "~/components/MenuItem.vue";
import {menu} from "~/constant/menus"


const hello = ref("Hello world!")
</script>
<style scoped lang="scss">
@import "@/assets/css/components/menu.scss";
</style>
