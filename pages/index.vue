<template>
  <NuxtLink to="https://nuxtjs.org">
  </NuxtLink>
</template>

<script lang="ts" setup>
import Vue from 'vue'
import {ref} from "vue";
import MenuItem from "~/components/MenuItem.vue";
import {menu} from "~/constant/menus"
import {useRouter} from "vue-router";
const router = useRouter()

router.push("/benchmark")


const hello = ref("Hello world!")
</script>
<style scoped lang="scss">
@import "@/assets/css/components/menu.scss";
</style>
