<template>
  <div class="menu-page" id="benchmark">
    <status-bar></status-bar>
    <div class="desktop">
      <add-book-mark></add-book-mark>
      <book-mark-item v-for="(item,index) in 30">{{item}}</book-mark-item>
      <div class="book-mark-placeholder" v-for="item in 10"></div>
    </div>
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
import BookMarkItem from "~/pages/benchmark/component/BookMarkItem.vue";
import AddBookMark from "~/pages/benchmark/component/AddBookMark.vue";


const hello = ref("Hello world!")
</script>
<style lang="scss">
@import "@/assets/css/components/menu.scss";
</style>
