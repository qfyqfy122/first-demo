<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "./layouts/BasicLayout.vue";
import { userLoginUserStore } from "./store/userLoginUserStore";
const loginUserStore=userLoginUserStore()
loginUserStore.fetchLoginUser()
</script>
<style></style>
