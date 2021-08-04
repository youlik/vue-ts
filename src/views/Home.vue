<template>
  <view-container>
    <template v-slot:tool>
      <base-button type="primary" label="换色"></base-button>
    </template>
    <div style="padding:10px">
        <div class="top-container">
          <img src="../assets/blue.png">
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
    const menuList = reactive([{name:'菜鸟',url:''},{name:'掘金',url:''},{name:'csdn',url:''},{name:'思否',url:''}])
    return {
      menuList
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
</style>

