<template>
    <ViewContainer>
        <md-editor v-model="content" height="857px"></md-editor>
    </ViewContainer>
</template>
  
<script lang="ts">
  import { defineComponent,reactive,ref } from "vue";
import 'md-editor-v3/lib/style.css';
import ViewContainer from "@/baseComponents/viewContainer/index.vue";
import MdEditor from 'md-editor-v3'
  export default defineComponent({
    name: "Home",
    components: {
        ViewContainer,
        MdEditor
    },
    setup(){
        let content = ref('')
        return {
            content
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
  
  