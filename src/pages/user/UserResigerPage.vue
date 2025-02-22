<template>
  <div id="UserResigerPage">
    <h2 class="title">用户注册</h2>
    <a-form
    style="max-width: 480px; margin: 0 auto;"
    :model="formState"
    name="basic"
    label-align="left"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 20 }"
    autocomplete="off"
    @finish="handleSubmit"
  >
    <a-form-item
      label="账号"
      name="userAccount"
      :rules="[{ required: true, message: '请输入账号'}]"
    >
      <a-input v-model:value="formState.userAccount"
       placeholder="请输入账号" />
    </a-form-item>

    <a-form-item
      label="密码"
      name="userPassword"
      :rules="[{ required: true, message: '请输入密码' },{min:8,message:'密码不能少于八位'}]"
    >
      <a-input-password v-model:value="formState.userPassword" placeholder="请输入密码" />
    </a-form-item>
    <a-form-item
      label="确认密码"
      name="userPassword"
      :rules="[{ required: true, message: '请确认你的密码' },{min:8,message:'请确认你的密码'}]"
    >
      <a-input-password v-model:value="formState.checkPassword" placeholder="请输入密码" />
    </a-form-item>
    <a-form-item
      label="编号"
      name="planeCode"
      :rules="[{ required: true, message: '请输入编号'}]"
    >
      <a-input v-model:value="formState.planeCode"
       placeholder="请输入编号" />
    </a-form-item>


    <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
      <a-button type="primary" html-type="submit">注册</a-button>
    </a-form-item>
  </a-form>
  </div>
</template>
<script lang="ts" setup>
import { userRegister } from '@/api/user';
import { userLoginUserStore } from '@/store/userLoginUserStore';
import { message } from 'ant-design-vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

interface FormState {
  userAccount: string;
  userPassword: string;
  checkPassword:string;
  planeCode:string;
}
const router=useRouter()
const formState = reactive<FormState>({
  userAccount: "",
  userPassword: "",
  checkPassword:"",
  planeCode:"",
});
const loginUserStore=userLoginUserStore()
//提交表单
const handleSubmit =  async() => {
  //判断密码是否一样
  if(formState.userPassword!==formState.checkPassword){
    message.error("两次密码不一致，请重新输入")
    return
  }


  const res=await userRegister(formState)
  //注册成功，跳转登录页面
  if(res.data.code===0&& res.data.data){
    // await loginUserStore.fetchLoginUser()
    message.success("注册成功")
    router.push({
      path:"/user/login",
      replace:true
    })
  }else{
    message.error("注册失败")
  }
};

</script>

<style scoped>
#UserResigerPage .title{
  text-align: center;
  margin-bottom: 16px;
}
</style>