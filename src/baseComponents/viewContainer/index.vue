<template>
  <div class="view-container">
      <div class="tool-bar-container">
          <div style="width:50%;line-height:40px;text-align:left;padding:0 5px">标题</div>
          <div style="width:50%;display:flex;align-items:center;justify-content: flex-end;padding-right:5px">
            <slot name="tool"></slot>
          </div>
      </div>
      <div class="content-container">
        <slot></slot>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

    export default defineComponent({
        name:'viewContainer',
        components:{},
        props:{
            title:String,
            showToolBar:Boolean
        },

    })
</script>

<style lang="scss" scoped>
    .tool-bar-container{
        height: 50px;
        display: flex;
        width: 100%;
        border-radius: 5px;
        background-color: $green-1;
    }

    .view-container{
        width: 85%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        background-color: #DCDCDC;
    }

    .content-container{
        height: calc(100% - 60px);
        width: 100%;
        margin-top: 10px;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: #ffffff;
    }
</style>