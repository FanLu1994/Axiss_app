<template>
  <div class="menu-page" id="benchmark">
    <div class="status-bar">
      状态栏1111
    </div>
    <div class="desktop">content</div>
    <Dock></Dock>
  </div>
</template>

<script lang="ts" setup>
import Vue from 'vue'
import {ref} from "vue";
import MenuItem from "~/components/MenuItem.vue";
import Dock from "./component/Dock.vue"
import {menu} from "~/constant/menus"


const hello = ref("Hello world!")
</script>
<style scoped lang="scss">
@import "@/assets/css/components/menu.scss";
</style>
