<template>
  <div class="flex justify-center items-center ">
    <menu-item v-for="menuitem in menu" :name="menuitem.name" :url="menuitem.url">
    </menu-item>
  </div>
</template>

<script lang="ts" setup>
import Vue from 'vue'
import {ref} from "vue";
import MenuItem from "~/components/MenuItem.vue";
import {menu} from "~/constant/menus"


const hello = ref("Hello world!")
</script>
