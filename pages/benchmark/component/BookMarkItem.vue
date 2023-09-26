<template>
  <div class="bookmark-item " @click="jump(bookmark.url)">

    <img :src="bookmark.icon" alt="baidu">
    {{bookmark.name}}
  </div>
</template>
<script setup>

defineProps({
  bookmark:{}
})

const jump = (url)=>{
  window.open(url)
}

</script>
<style scoped>

</style>
