<template>
    <ViewContainer :list="containerData">
        <md-editor v-model="content" height="857px"></md-editor>
        <template v-slot:tool>
          <BaseButton label="提交" type="primary" @click="addBlog" ></BaseButton>
        </template>
    </ViewContainer>
</template>
  
<script lang="ts">
  import { defineComponent,reactive,ref } from "vue";
import 'md-editor-v3/lib/style.css';
import ViewContainer,{containerProps} from "@/baseComponents/viewContainer/index.vue";
import MdEditor from 'md-editor-v3'
import axios from "axios";
import BaseButton from "@/baseComponents/baseButton/index.vue";
  export default defineComponent({
    name: "Home",
    components: {
        ViewContainer,
        MdEditor,
        BaseButton
    },
    setup(){
        let content = ref('')
        function addBlog(params:any) {
          axios.post('/list/addBlog')
        }
        const containerData:containerProps = {title:'添加博客',showToolBar:true}
        return {
            content,addBlog,containerData
      }
    }
  });
  </script>
  
  <style lang="scss">
      .editor-container{
        width: 100%;
        height: 100%;
      }
      .md{
          height: 857px;
      }
  </style>
  
  