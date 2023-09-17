<template>
  <div class="dock-bar" id="dock-bar">
    <div class="dock-bar__item" v-for="(item,index) in menuItem.list"
         :data="item">
      {{item}}
    </div>
  </div>
</template>
<script setup>
import {onMounted,reactive} from "vue";
import StatusBar from "~/pages/benchmark/component/StatusBar";

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

const menuItem = reactive({
  list:[1,2,3,4,5,6,7,8,9]
})


</script>
<style scoped>

</style>
