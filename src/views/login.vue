<template>
  <div class="login-container">
      <div class="login-dialog">
          <base-input label="用户名"></base-input>
          <base-input label="密码" type="passward"></base-input>
          <div style="display:flex">
              <baseButton type="primary" label="注册"></baseButton>
              <baseButton type="success" label="登录" @click="login" style="margin-left:15px"></baseButton>
          </div>
      </div>
  </div>
</template>
  <script lang="ts">
import { defineComponent } from "vue";
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
          router.push({name:'Layout'})
      }
      return {
          login
      }
  }
});
</script>
  
  <style lang="scss" scoped>
.login-container {
    width:100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-image: url("../assets/backgroundImage.jpg");
}
.login-dialog{
    width: 420px;
    height: 408px;
    margin-right: 400px;
    border-radius: 10px;
    box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 75%);
    background: rgba(0, 0, 0, 0.43);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
  