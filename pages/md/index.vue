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
    <div class="flex justify-between space-x-2 " style="height: 90vh">
      <div class="w-1/2 flex justify-center  bg-white rounded-md py-2 px-2 ">
        <textarea class="textarea textarea-bordered w-full h-full overflow-y-scroll md-input"
                  v-model="rawText"
                  @change="changeMd"
                  placeholder="请粘贴你的markdown内容">
        </textarea>
      </div>
      <div class="w-1/2 flex justify-center  bg-white rounded-md py-2 " >
        <wechat-render :raw-text="rawText"></wechat-render>
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
import MyComponent from "~/pages/md/components/MyComponent.vue";
import {onMounted, ref} from "vue";
import {marked} from "marked";
import WechatRender from "~/pages/md/components/WechatRender.vue";

const rawText = ref(
  "使用时，你得把默认的 Markdown 内容换成你自己的内容。\n" +
  "\n" +
  "关于本工具的介绍请看[这篇公众号文章](https://mp.weixin.qq.com/s/pn0LzyfgUj6rGUfVHUksjg)。\n" +
  "\n" +
  "\n" +
  "## 一级标题\n" +
  "\n" +
  "这是一级标题\n" +
  "\n" +
  "\n" +
  "### 二级标题\n" +
  "\n" +
  "上面是二级标题\n" +
  "\n" +
  "## 文字样式\n" +
  "\n" +
  "### 基本样式\n" +
  "\n" +
  "你好，我是一个来自地球的人。\n" +
  "\n" +
  "我是一个[智人](https://zh.wikipedia.org/wiki/智人 \"学名：Homo sapiens，意为“有智慧的人”\")，\n" +
  "我喜欢穿新衣服，都是**黑衣服**。\n" +
  "\n" +
  "我最大的*爱好*是拆汽车，我拆了很多汽车，宝马、奔驰、劳斯莱斯和特斯拉，但是都没装回去。\n" +
  "\n" +
  "上面表现了链接和加重两种样式，公众号以外的链接会被转换为脚注。\n" +
  "\n" +
  "\n" +
  "### 注音符号\n" +
  "\n" +
  "[注音符号 W3C 定义](http://www.w3.org/TR/ruby/)。支持日语注音假名，小夜時雨【さ・よ・しぐれ】 和 汉语拼音 上海【Shàng・hǎi】\n" +
  "\n" +
  "用法有以下几种：\n" +
  "\n" +
  "```\n" +
  "世界【せかい】\n" +
  "世界{せかい}\n" +
  "```\n" +
  "\n" +
  "世界{せかい}\n" +
  "\n" +
  "```\n" +
  "小夜時雨【さ・よ・しぐれ】\n" +
  "```\n" +
  "\n" +
  "小夜時雨【さ・よ・しぐれ】\n" +
  "\n" +
  "```\n" +
  "食べる【たべる】\n" +
  "食べる{たべる}\n" +
  "```\n" +
  "\n" +
  "食べる{たべる}\\n\\n english【英文】 will not translated{fan yi}'\n" +
  "\n" +
  "\n" +
  "## 段落、列表、引用\n" +
  "\n" +
  "[Markdown](https://sspai.com/post/25137 \"认识与入门 Markdown\") 是一种写文章用的语法。\n" +
  "\n" +
  "我们日常写文章用的工具，比如说 Word，提供了大量排版格式样式相关的选项。\n" +
  "\n" +
  "在写作之外，大量的时间都在处理这些排版、格式、样式、字体、图片位置等等。这不但是耗时耗力的事情，而且还会打乱里写作时的思绪，影响你的工作。\n" +
  "\n" +
  "列表项：\n" +
  "\n" +
  "- 一个列表项\n" +
  "- 另一个列表项\n" +
  "- 第三个列表项\n" +
  "\n" +
  "托 [Neko](https://github.com/nekocode) 的福，有序的列表项支持了。\n" +
  "\n" +
  "1. 一个列表项\n" +
  "2. 另一个列表项\n" +
  "3. 第三个列表项\n" +
  "\n" +
  "使用 Markdown 最大的意义在于可以让你关注写作本身，不需要花费精力在别的事情上。无论是严肃写作还是随手记，Markdown 都是最佳形式。\n" +
  "\n" +
  "> 引用：使用 Markdown 最大的意义在于可以让你关注写作本身 —— Lyric\n" +
  "\n" +
  "好。\n" +
  "\n" +
  "## 代码块、表格、图片\n" +
  "\n" +
  "接下来是一张图片。你可以用自己图床，也可以上传到微信媒体库再把图片 URL 粘贴回来，或者编辑好以后，在公众号里插入图片。\n" +
  "\n" +
  "![](https://res.wx.qq.com/mpres/zh_CN/htmledition/pages/login/loginpage/images/bg_banner4273fb.png)\n" +
  "\n" +
  "代码块，使用微信官方的高亮配色，在代码块标示语言即可。粘贴到公众号后，需要用鼠标点一下代码块，完成高亮。\n" +
  "\n" +
  "\n" +
  "    ```cpp\n" +
  "    你的代码\n" +
  "    ```\n" +
  "\n" +
  "\n" +
  "\n" +
  "```cpp\n" +
  "#include <stdio.h>\n" +
  "\n" +
  "const int MAX = 10;\n" +
  "int cache[MAX] = {0};\n" +
  "\n" +
  "int fib(int x) {\n" +
  "  if (x == 1) return 1;\n" +
  "  if (x == 0) return 0;\n" +
  "  if (cache[x] == 0) {\n" +
  "    int ret = fib(x - 1) + fib(x - 2);\n" +
  "    cache[x] = ret;\n" +
  "  }\n" +
  "  return cache[x];\n" +
  "}\n" +
  "\n" +
  "int main() {\n" +
  "    int i;\n" +
  "    printf(\"fibonacci series:\\n\");\n" +
  "    for (i = 0; i < MAX; ++i) {\n" +
  "        printf(\"%d \", fib(i));\n" +
  "    }\n" +
  "    return 0;\n" +
  "}\n" +
  "```\n" +
  "\n" +
  "然后是一个内联代码： a paragraphg with inline code `{code: 0}`。\n" +
  "\n" +
  "接下来是表格示例：\n" +
  "\n" +
  "| Header 1 | Header 2 |\n" +
  "| --- | --- |\n" +
  "| Key 1 | Value 1 |\n" +
  "| Key 2 | Value 2 |\n" +
  "| Key 3 | Value 3 |\n" +
  "\n"
)


const changeMd = ()=>{
  console.log(rawText)
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
