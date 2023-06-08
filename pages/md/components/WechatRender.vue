<template>
  <div >
    <div class="mb-2">
<!--      <button class="btn btn-success btn-sm py-0 text-sm leading-3	">更新</button>-->
      <button class="btn btn-success btn-sm py-0 text-sm leading-3	" @click="copy">复制</button>
    </div>
    <div v-html="mdText" id="preview" class="prose markdown" :class="theme"></div>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, onMounted, ref, toRefs, watch} from "vue";
import {marked} from "marked";

const { $toast } = useNuxtApp();

const props = defineProps({
  rawText:{
    type:String,
    required:true,
  }
})

const raw = toRefs(props).rawText
watch(raw,(newV,oldV)=>{
  mdText.value = marked(props.rawText)
})

const theme = "default-md"
const mdText = ref("")

onBeforeMount(()=>{
  setTimeout(()=>{
    mdText.value = marked(props.rawText)
  },500)

  console.log(mdText.value)
})


const updateMd = ()=>{
  mdText.value = marked(props.rawText)
}


const copy = ()=>{
  let clipboardDiv = document.getElementById('preview')!
  clipboardDiv.focus();
  window.getSelection()!.removeAllRanges();
  let range = document.createRange();
  range.setStartBefore(clipboardDiv.firstChild!);
  range.setEndAfter(clipboardDiv.lastChild!);
  window.getSelection()!.addRange(range);


  try {
    if (document.execCommand('copy')) {
      $toast.success("复制成功",{
        position: 'top',
      })
    } else {
      $toast.error("复制失败",{
        position: 'top',
      })
    }
  } catch (err) {
    $toast.error("复制失败",{
      position: 'top',
    })
  }

}


</script>

<style scoped lang="scss">
@import "@/assets/css/wechat_theme/default.scss";

.markdown{
  margin: 0 -20px;
  width: 375px;
  padding: 20px;
  font-size: 16px;
  outline: none;
  box-shadow: 0 0 60px rgba(0,0,0,0.1);
  height: 90%;
  overflow: auto;
}



</style>
