<template>
  <div >
    <div class="mb-2">
<!--      <button class="btn btn-success btn-sm py-0 text-sm leading-3	">更新</button>-->
      <button class="btn btn-success btn-sm py-0 text-sm leading-3" @click="copy">复制</button>
    </div>
    <div v-html="mdText" id="preview" class="prose markdown" :class="classList"
         :style="{fontSize:fontSize+'px'}"></div>
  </div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onBeforeMount, onMounted, ref, toRefs, watch} from "vue";
import {marked} from "marked";
import {ElMessage} from "element-plus";
import Prism from 'prismjs'
import {useFetch} from "#app";
import {getWebTitle} from "~/api/api";

const props = defineProps({
  rawText:{
    type:String,
    required:true,
  },
  theme:{
    type:String,
  },
  font:{
    type:String,
  },
  fontSize:{
    type:Number,
    required:true,
  }
})

const raw = toRefs(props).rawText
watch(props,async (newV,oldV)=>{
  mdText.value = marked(props.rawText)
  await nextTick()
  Prism.highlightAll()
  getAllLink()
})

const classList = computed(()=>{
  return props.theme+" "+props.font
})


const getAllLink = async ()=>{
  const ele = document.getElementById('preview')
  const links = ele!.getElementsByTagName("a")
  let linkList = []
  for (let i = 0; i < links.length; i++) {
    // TODO:添加元素到html
    const { data, pending, error, refresh } = await getWebTitle({url:links[i].href})
    console.log(data.value)
    console.log(data.value.result)
    console.log(error)
    if(error.value){
      linkList.push({
        link:links[i].href,
        title:""
      })
    }else{
      linkList.push({
        link:links[i].href,
        title:data.value.result
      })
    }
  }
  console.log(linkList)
  mdText.value+="\n"
  for (let i = 0; i < linkList.length; i++) {
    if(linkList[i].title!==""){
      mdText.value += `<p >[${i}] ${linkList[i].title}(${linkList[i].link})</p>`
    }else{
      mdText.value += `<p>[${i}] ${linkList[i].link}</p>`
    }
  }
  setTimeout(()=>{
    Prism.highlightAll()
  },200)

}


const mdText = ref("")

onBeforeMount(()=>{
  setTimeout(()=>{
    mdText.value = marked(props.rawText)
  },500)
})

onMounted(()=>{
  Prism.highlightAll()
})


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
      ElMessage.success("复制成功")
    } else {
      ElMessage.error("复制失败")
    }
  } catch (err) {
    ElMessage.error("复制失败")
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
  border-radius: 10px;
}


.markdown::-webkit-scrollbar {
  //display: none;
}

.markdown::-webkit-scrollbar-thumb{
  background: #dddddd;
  border-radius: 20px;
}



</style>
