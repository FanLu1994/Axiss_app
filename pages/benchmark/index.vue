<template>
  <div class="menu-page" id="benchmark">
    <status-bar></status-bar>
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
import StatusBar from "~/pages/benchmark/component/StatusBar.vue";


const hello = ref("Hello world!")
</script>
<style scoped lang="scss">
@import "@/assets/css/components/menu.scss";
</style>
