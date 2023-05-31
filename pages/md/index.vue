<template>
  <div class="h-screen" style="background: #f2f3f5">
    <div class="flex  items-center bg-white py-4 mb-2 px-2">
      <div style="width: 300px">
        Axiss公众号模板工具
      </div>
      <div class="flex justify-center items-center space-x-2" style="width: 400px">
        <div class="whitespace-nowrap w-fit">主题选择</div>
        <select class="select select-secondary select-sm w-1/2 max-w-xs" placeholder="1111">
          <option disabled selected>请选择样式</option>
          <option>Java</option>
          <option>Go</option>
          <option>C</option>
          <option>C#</option>
          <option>C++</option>
          <option>Rust</option>
          <option>JavaScript</option>
          <option>Python</option>
        </select>
      </div>
      <div class="flex justify-center items-center space-x-2" style="width: 400px">
        <div class="whitespace-nowrap w-fit">字体样式</div>
        <select class="select select-secondary select-sm w-1/2 max-w-xs" placeholder="1111">
          <option disabled selected>请选择样式</option>
          <option>Java</option>
          <option>Go</option>
          <option>C</option>
          <option>C#</option>
          <option>C++</option>
          <option>Rust</option>
          <option>JavaScript</option>
          <option>Python</option>
        </select>
      </div>
      <div class="flex justify-center items-center space-x-2" style="width: 400px">
        <div class="whitespace-nowrap w-fit">字体大小</div>
        <select class="select select-secondary select-sm w-1/2 max-w-xs" placeholder="1111">
          <option disabled selected>请选择样式</option>
          <option>Java</option>
          <option>Go</option>
          <option>C</option>
          <option>C#</option>
          <option>C++</option>
          <option>Rust</option>
          <option>JavaScript</option>
          <option>Python</option>
        </select>
      </div>
      <div class="flex justify-end items-center space-x-2 " style="width: 400px;margin-left: auto">
        <button class="btn btn-primary btn-sm py-0 text-sm leading-3	">关于</button>

      </div>
    </div>
    <div class="flex justify-between space-x-2 " style="height: 90%">
      <div class="w-1/2 flex justify-center  bg-white rounded-md py-2 px-2 ">
        <textarea class="textarea textarea-bordered w-full h-full overflow-y-scroll md-input"
                  v-model="rawText"
                  @change="changeMd"
                  placeholder="请粘贴你的markdown内容">
        </textarea>
      </div>
      <div class="w-1/2 flex justify-center  bg-white rounded-md py-2 ">
        <span v-html="mdtext" class="markdown overflow-auto"></span>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import MyComponent from "~/pages/md/components/MyComponent.vue";
import {ref} from "vue";
import {marked} from "marked";

const rawText = ref("")
const mdtext = ref("# 1234")

const changeMd = ()=>{
  console.log(rawText)
  mdtext.value = marked(rawText.value)
}

</script>

<style scoped>
.md-input::-webkit-scrollbar-thumb{
  background: green;
  border-radius:10px;
}

.md-input::-webkit-scrollbar-track{
  display: none;
}

.md-input::-webkit-scrollbar-button{
  display: none;
}
</style>
