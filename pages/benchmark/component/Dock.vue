<template>

  <div class="dock-bar" id="dock-bar">
    bottom1211
  </div>
</template>
<script setup>
import {onMounted} from "vue";

onMounted(()=>{
  document.getElementById("benchmark").addEventListener("mousemove",(event)=>{
    const distanceFromBottom = window.innerHeight-event.clientY;
    const dockBar = document.getElementById("dock-bar")
    if(distanceFromBottom<=130){
      dockBar.style.transform = " translate(-50%,1rem)"
    }else{
      dockBar.style.transform = " translate(-50%,10rem)"
    }
  })
})

</script>
<style scoped>

</style>
