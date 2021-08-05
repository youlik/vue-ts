<template>
  <view-container>
    <template v-slot:tool>
      <base-button type="primary" @click="replaceTheme" label="换色"></base-button>
    </template>
    <div style="padding:10px">
        <div class="top-container">
          <div class="img-container">
          <img src="../assets/blue.png">
          </div>
          <div class="tool-container">
                <div class="tool-item-container" v-for="(item,index) in menuList" :key="index">{{item.name}}</div>
          </div>
        </div>
    </div>
  </view-container>
</template>

<script lang="ts">
import { defineComponent,reactive } from "vue";
import viewContainer from "../baseComponents/viewContainer/index.vue"
import BaseButton from "@/baseComponents/baseButton/index.vue";
export default defineComponent({
  name: "Home",
  components: {
    viewContainer,
    BaseButton
  },
  setup(){
    const menuList: Array<any> = reactive([{name:'菜鸟',url:''},{name:'掘金',url:''},{name:'csdn',url:''},{name:'思否',url:''}])
    let replaceTheme = function(){
      console.log("触发");
      
      window.document.documentElement.setAttribute('data-theme', 'light')
    }
      return {
      menuList,
      replaceTheme
    }
  }
});
</script>

<style lang="scss">
.back-img{
  width: 220px;
  height: 170px;
  border-radius: 10px;
}

.top-container{
  height: 163px;
  display: flex;
}
.tool-container{
  height: 100%;
  width: calc(100% - 224px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.tool-item-container{
  width: 60px;
  height: 60px;
}
.img-container{
  height: 163px;
  width: 218px;
  position: relative;
  &::before,&::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid rgb(17, 36, 100);
    transition: all .5s;
    animation: clippath 4s infinite linear;
  }
  @keyframes clippath {
      0%, 100% { clip-path: inset(0 0 95% 0); }
      25% { clip-path: inset(0 95% 0 0); }
      50% { clip-path: inset(95% 0 0 0); }
      75% { clip-path: inset(0 0 0 95%); }
  }
  &::after{
    animation-delay: -2s;
  }
}
</style>

