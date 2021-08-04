<template>
    <section class="slider-container">
        <div class="information-container"></div>
        <div v-for="(item,index) in list" :style="{backgroundColor:currentIndex === index ? '#00BFFF':''}" @click="currentIndex = index" :key="index" class="slider-item-container">{{item.name}}</div>
    </section>
</template>
  
  <script lang="ts">
  import { defineComponent, reactive,ref } from "vue";
  
      export default defineComponent({
          name:'viewContainer',
          components:{},
          setup(){
              const list = reactive([{name:"首页",url:''},{name:"组件",url:''},{name:"留言",url:''}])
              let currentIndex = ref(0)
              return {list,currentIndex}
          }
      })
  </script>
  
  <style lang="scss" scoped>
      .slider-container{
        width:15%;
        height:100%;
        box-sizing: border-box;
        padding: 10px 0;
        background-color: $blue-2	;
      }

      .slider-item-container{
        width: 100%;
        line-height: 40px;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
        &:hover{
            background-color: $blue-1;
        }
      }
      .information-container{
        height: 200px;
        margin-bottom: 20px;
      }
  </style>