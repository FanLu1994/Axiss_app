<template>
  <div class="menu-item" @click="onClickItem">
    {{props.name}}
  </div>

</template>

<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps<{
  name:string,
  url:string,
}>()


const onClickItem = ()=>{
  window.open(props.url)
}


</script>

<style scoped lang="scss">
@import "@/assets/css/components/MenuItem.scss";

</style>
