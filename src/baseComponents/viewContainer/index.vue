<template>
  <div class="view-container">
      <div class="tool-bar-container">
        <slot name="tool"></slot>
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

<style lang="scss">
    .tool-bar-container{
        height: 40px;
        display: flex;
        width: 100%;
    }

    .view-container{
        width: 80%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    .content-container{
        height: calc(100% - 40px);
        width: 100%;
    }
</style>