<template>
  <div class="bookmark-item bookmark-item__add" @click="showDialog=true">
    添加
  </div>
  <client-only>
    <el-dialog title="添加书签" v-model="showDialog"
               class="rounded-lg">
      <el-form
          label-position="top"
          label-width="100px"
          :model="addBookmarkForm"
      >
        <el-form-item label="书签名">
          <el-input v-model="addBookmarkForm.name" />
        </el-form-item>
        <el-form-item label="网址">
          <el-input v-model="addBookmarkForm.url" />
        </el-form-item>
        <el-form-item label="图标地址">
          <el-input v-model="addBookmarkForm.icon" />
        </el-form-item>
        <el-form-item label="标签">
          <el-input v-model="addBookmarkForm.tags" />
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="addBookmark">
          提交
        </el-button>
      </span>
      </template>
    </el-dialog>
  </client-only>

</template>
<script setup>
import {reactive, ref} from "vue"
import {saveUrl} from "~/api/api";
import {ElMessage} from "element-plus";
const showDialog = ref(false)
const addBookmarkForm = reactive({
  name:'',
  url:'',
  icon:'',
  tags:'',
})

const addBookmark = ()=>{
  if(addBookmarkForm.name==="" && addBookmarkForm.url===""){
    ElMessage.error("表单没有填完整哦")
    return
  }

  saveUrl(addBookmarkForm).then(res=>{
    console.log(res)
    if(res.data.code===200){
      ElMessage.success("添加成功")
      // TODO:刷新列表
    }
    showDialog.value = false
  })
}

</script>
<style scoped>

</style>
