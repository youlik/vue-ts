<template>
    <div class="base-input-container">
        <span class="label-container">{{label}}</span>
        <input v-model="currentValue" :type="type" class="input-container">
    </div>
</template>
  
  <script lang="ts">
  import { computed, defineComponent, reactive, ref, toRef } from "vue";
  
      export default defineComponent({
          name:'baseButton',
          components:{},
          props:{
              label:String,
              type:String
          },
          setup(props,{emit}){
              let currentValue = ref()
              return {currentValue}
          }
  
      })
  </script>
  
  <style lang="scss" scoped>
      .base-input-container{
          height: 40px;
          width: 396px;
          line-height: 40px;
          color:#121313;
          background-color: #ffffff;
          border-radius: 6px;
          box-sizing: border-box;
          display: flex;
          border:1px solid gray;
      }

      .input-container{
        //   line-height: 40px;
          height: 38px;
          padding: 0;
          box-sizing: border-box;
          border-radius: 6px;
          border:none;
          outline: none;
          flex:1
      }

      .label-container{
          padding: 0 10px;
      }
  </style>