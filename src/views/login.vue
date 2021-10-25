<template>
  <div class="login-container">
    <div class="login-control-container">
      <div class="hand" v-if="!isPassword"></div>
      <div class="hand" v-if="!isPassword" style="left: 170px"></div>
      <div class="arms">
        <div
          class="arm"
          :style="{
            transform: isPassword
              ? 'translateY(-40px) translateX(40px) scaleX(1)'
              : '',
          }"
        ></div>
        <div
          class="arm arm-right"
          :style="{
            transform: isPassword
              ? 'translateY(-40px) translateX(-40px) scaleX(-1)'
              : '',
          }"
        ></div>
      </div>
    </div>
    <div class="login-dialog">
      <base-input label="用户名" v-model="username"></base-input>
      <base-input
        label="密码"
        v-model="password"
        type="passward"
        @click="isPassword = true"
        @blur="isPassword = false"
      ></base-input>
      <base-input label="邮箱" v-if="isRegister"></base-input>
      <div style="display: flex">
        <baseButton type="primary" label="注册" @click="register"></baseButton>
        <baseButton
          type="success"
          label="登录"
          v-if="!isRegister"
          @click="toLogin"
          style="margin-left: 15px"
        ></baseButton>
        <baseButton
          type="success"
          label="取消"
          v-else
          @click="isRegister = false"
          style="margin-left: 15px"
        ></baseButton>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, getCurrentInstance, reactive } from "vue";
import { useRouter } from "vue-router";
import { login } from "@/api/https_data";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "login",
  components: {},
  setup() {
    const router = useRouter();
    const username = ref<string>(""),
      password = ref<string>("");
    let isRegister = ref(false);
    function toLogin(params: any) {
      login({ username: username.value, password: password.value })
        .then((res) => {
          router.push({ path: "/home" });
          console.log(res.data);
          localStorage.setItem("token", res.data.data.token);
        })
        .catch((err) => {
          console.log(err);
          ElMessage.error(`${err.data.description}`);
        });
    }
    function register(params: any) {
      isRegister.value = true;
    }
    let isPassword = ref(false);
    return {
      toLogin,
      isPassword,
      register,
      username,
      password,
      isRegister,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-image: url("../assets/backgroundImage.jpg");
}
.login-dialog {
  width: 420px;
  height: 408px;
  // margin-right: 400px;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 75%);
  background: rgba(0, 0, 0, 0.43);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 100px;
  top: 25%;
}

.login-control-container {
  width: 211px;
  height: 108px;
  margin-top: 5px;
  position: absolute;
  right: 200px;
  top: 14%;
  z-index: 99;
  background-image: url("../assets/login.png");
}

.hand {
  width: 34px;
  height: 34px;
  -webkit-border-radius: 40px;
  border-radius: 40px;
  background-color: #472d20;
  -webkit-transform: scaleY(0.6);
  -moz-transform: scaleY(0.6);
  -o-transform: scaleY(0.6);
  -ms-transform: scaleY(0.6);
  transform: scaleY(0.6);
  -webkit-transition: 0.3s ease-out;
  -moz-transition: 0.3s ease-out;
  -o-transition: 0.3s ease-out;
  -ms-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  position: absolute;
  left: 14px;
  bottom: -8px;
}

.arms {
  top: 58px;
  position: absolute;
  width: 100%;
  height: 41px;
  overflow: hidden;
}

.arm {
  width: 40px;
  height: 65px;
  position: absolute;
  left: 20px;
  top: 40px;
  background-image: url(../assets/login-arm.png);
}
// transform: translateY(-40px) translateX(40px) scaleX(1);

.arm-right {
  left: 158px;
  transform: rotate(20deg) scaleX(-1);
}
</style>
