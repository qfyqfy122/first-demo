import { message } from "ant-design-vue";
import router from "./router";
import { userLoginUserStore } from "./store/userLoginUserStore";

router.beforeEach(async () => {
  const loginUserStore = userLoginUserStore()
  const loginUser = loginUserStore.loginUser
  const toUrl = to.fullPath
  if (toUrl.startWith("/admin")) {
    if (!loginUser || loginUser.userRole !== 1) {
      message.error("没有权限")
      next(`/user/login?redirect=${to.fullPath}`)
      return
    }
  }

})