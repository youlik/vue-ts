<template>
    <div class="base-button-container" :class="type" @click="click">
        {{label}}
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
      export default defineComponent({
          name:'baseButton',
          components:{},
          props:{
              label:String,
              type:String,
          },
          setup(props,{emit}){
              function click(){
                    emit('click')
              }
              return {click}
          }
  
      })
  </script>
  
  <style lang="scss" scoped>
      .base-button-container{
          height: 40px;
          width: 96px;
          line-height: 40px;
          color:#ffffff;
          border-radius: 6px;
          cursor: pointer;
      }

      .primary{
          background-color: $blue-1;
          &:hover{
            animation:gelation 0.5s 1
          }
      }

      @keyframes gelation {
          from, to {
              transform:scale(1,1)
          }

          25% {
              transform: scale(0.9,1.1);
          }

          50% {
              transform: scale(1.1,0.9);

          }
          75% {
              transform: scale(0.95,1.05);

          }
      }
  </style>