import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '@/pages/HomePage.vue'
import UserLoginPage from '@/pages/user/UserLoginPage.vue'
import UserResigerPage from '@/pages/user/UserResigerPage.vue'
import UserManagePage from '@/pages/admin/UserManagePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/user/login',
    name: 'userLogin',
    component: UserLoginPage
  },
  {
    path: '/user/register',
    name: 'userRegister',
    component: UserResigerPage
  },
  {
    path: '/user/userManage',
    name: 'adminUserManage',
    component: UserManagePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
