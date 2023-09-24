<template>
  <div class="menu-page" id="benchmark">
    <status-bar></status-bar>
    <div class="desktop">
      <add-book-mark></add-book-mark>
      <book-mark-item v-for="(item,index) in bookmarks" :bookmark="item"></book-mark-item>
      <div class="book-mark-placeholder" v-for="item in 10"></div>
    </div>
    <Dock></Dock>
  </div>
</template>

<script lang="ts" setup>
import Vue, {onMounted, reactive, unref} from 'vue'
import {ref} from "vue";
import MenuItem from "~/components/MenuItem.vue";
import Dock from "./component/Dock.vue"
import {menu} from "~/constant/menus"
import StatusBar from "~/pages/benchmark/component/StatusBar.vue";
import BookMarkItem from "~/pages/benchmark/component/BookMarkItem.vue";
import AddBookMark from "~/pages/benchmark/component/AddBookMark.vue";
import {getUrls} from "~/api/api";

onMounted(()=>{
  setTimeout(()=>{
    getBookMarks()
  },200)

})

const bookmarks = ref([])

const getBookMarks = async ()=>{
  const result:any = await getUrls({
    page:1,
    size:20,
  })
  if(result.data.value){
    console.log(result.data.value)
    bookmarks.value = unref(result.data.value.data)
    console.log(bookmarks.value)
  }

}

</script>
<style lang="scss">
@import "@/assets/css/components/menu.scss";
</style>
