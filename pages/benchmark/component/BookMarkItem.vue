<template>
  <div class="bookmark-item ">
    {{bookmark.name}}
    {{bookmark.ID}}
  </div>
</template>
<script setup>

defineProps({
  bookmark:{}
})

</script>
<style scoped>

</style>
