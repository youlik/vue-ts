<template>
    <div class="blog-card-container">
        <div class="text-title">
            时间：{{list.update_time}}
        </div>
        <span class="text-highlight">{{list.title}}</span>
        <span>{{content}}</span>
    </div>
</template>
  
<script lang="ts">
import { defineComponent,computed,reactive,ref,PropType } from "vue";
export interface blogCardProps {
      title: string,
      content:string,
      label:string,
      update_time:string,
  }
    export default defineComponent({
        name:'viewContainer',
        components:{},
        props:{
            // 用list来接受参数
            list:{
                type:Object as PropType<blogCardProps>,
                required:true
            }
        },
        setup(props){
            const content = computed(()=>{
                let contentData = props.list.content
                return contentData.slice(0,20)
            })
            return {
                content
            }
        }
    })
  </script>
  
  <style lang="scss">
    .blog-card-container{
        width: 100%;
        height: 125px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-bottom: 1px solid #e5e6eb;
    }

    .text-title{
        line-height: 22px;
        margin-bottom: 8px;
    }

    .text-highlight{
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #1d2129;
        text-align: left;
        margin-bottom: 8px;
    }
  </style>
  
  