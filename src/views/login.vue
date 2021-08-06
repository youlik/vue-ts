<template>
  <div class="login-container">
      <div class="login-control-container">
        <div class="hand" v-if="!isPassword"></div>
        <div class="hand" v-if="!isPassword" style="left:170px"></div>
        <div class="arms" >
          <div class="arm" :style="{transform: isPassword?'translateY(-40px) translateX(40px) scaleX(1)':''}"></div>
          <div class="arm arm-right" :style="{transform: isPassword?'translateY(-40px) translateX(-40px) scaleX(-1)':''}"></div>
        </div>
      </div>
      <div class="login-dialog">
          <base-input label="用户名"></base-input>
          <base-input label="密码" type="passward" @click="isPassword = true" @blur="isPassword = false"></base-input>
          <div style="display:flex">
              <baseButton type="primary" label="注册"></baseButton>
              <baseButton type="success" label="登录" @click="login" style="margin-left:15px"></baseButton>
          </div>
      </div>
  </div>
</template>
  <script lang="ts">
import { defineComponent,ref } from "vue";
import { useRouter } from "vue-router";
import BaseInput from "@/baseComponents/baseInput/index.vue";
import BaseButton from "@/baseComponents/baseButton/index.vue";
export default defineComponent({
  name: "login",
  components:{
    BaseInput,
    BaseButton
  },
  setup(){
      const router = useRouter()
      function login(params:any) {
          router.push({path:'/layout/home'})
      }
      let isPassword = ref(false)
      console.log(isPassword.value)
      return {
          login,isPassword
      }
  }
});
</script>
  
  <style lang="scss" scoped>
.login-container {
    width:100vw;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-image: url("../assets/backgroundImage.jpg");
}
.login-dialog{
    width: 420px;
    height: 408px;
    // margin-right: 400px;
    border-radius: 10px;
    box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 75%);
    background: rgba(0, 0, 0, 0.43);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 100px;
    top: 25%;
}

.login-control-container{
  width: 211px;
  height: 108px;
  margin-top: 5px;
  position: absolute;
  right: 200px;
  top: 14%;
  z-index: 99;
  background-image: url("../assets/login.png");
}

.hand{
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

.arms{
    top: 58px;
    position: absolute;
    width: 100%;
    height: 41px;
    overflow: hidden;
}

.arm{
  width: 40px;
  height: 65px;
  position: absolute;
  left: 20px;
  top: 40px;
  background-image: url(../assets/login-arm.png);
}
// transform: translateY(-40px) translateX(40px) scaleX(1);

.arm-right{
  left: 158px;transform: rotate(20deg) scaleX(-1);
}
</style>
  