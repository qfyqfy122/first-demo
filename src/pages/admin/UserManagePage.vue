<template>
  <div id="UserManagePage">
    <a-input-search
    style="max-width: 320px; margin-bottom: 20px;"
      v-model:value="searchValue"
      placeholder="输入用户名搜索"
      enter-button="搜索"
      size="large"
      @search="onSearch"
    />
    <a-table :columns="columns" :data-source="data">

  <template #bodyCell="{ column, record }">
  <template v-if="column.dataIndex === 'avaterUrl'">
    <a-image :src:"record.avatarUrl" :width="120" />
  </template>
  <template v-else-if="column.dataIndex === 'userRole'">
    <div v-if="record.userRole===1">
      <a-tag color="green">管理员</a-tag>
    </div>
    <div v-else>
      <a-tag color="blue">普通用户</a-tag>
    </div>
  </template>
  <template v-else-if="column.dataIndex === 'createTime'">
    <!-- {{ dayjs(record.createTime).format("YYYY-MM-DD HH:MM:SS") }} -->
  </template>
  <template v-else-if="column.key === 'action'">
 
      <a-button danger @click="doDetele(record.id)">删除</a-button>
    
  </template>
</template>
</a-table>
  </div>
  
</template>
<script lang="ts" setup>
import { deleteUser, searchUsers } from '@/api/user';
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { ref } from 'vue';
const searchValue=ref()
 const onSearch=()=>{
  fetchData(searchValue.value)
 }
 const doDetele=(id:string)=>{
  if(!id){
    return
  }
  const res=await deleteUser(id)
  if(res.data.code===0){
    message.success("删除成功")
  }else{
    message.error("删除失败")
  }
 }
const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "用户名",
    dataIndex: "username",
  },
  {
    title: "账号",
    dataIndex: "userAccount",
  },
  {
    title: "头像",
    dataIndex: "avatarUrl",
  },
  {
    title: "性别",
    dataIndex: "gender",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "用户角色",
    dataIndex: "userRole",
  },
  {
    title: "操作",
    key: "action",
  },
];


const data = ref([
 
]);
const fetchData=async(username="")=>{
  const res=await searchUsers("")
  if(res.data.data){
    data.value=res.data.data;
  }else{
    message.error("获取数据失败")
  }
}
fetchData()
</script>

