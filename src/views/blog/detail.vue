<template>
  <ViewContainer :list="containerData">
    <md-editor v-model="content" height="857px" previewOnly></md-editor>
  </ViewContainer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import "md-editor-v3/lib/style.css";
import ViewContainer, {
  containerProps,
} from "@/baseComponents/viewContainer/index.vue";
import MdEditor from "md-editor-v3";
import axios from "axios";
import BaseButton from "@/baseComponents/baseButton/index.vue";
export default defineComponent({
  name: "blogDetails",
  components: {
    ViewContainer,
    MdEditor,
  },
  setup() {
    let content = ref("");
    let title = ref("");
    function getList() {
      axios.get("/list/getBlogList").then((res) => {
        content.value = res.data.data[0].content;
        title.value = res.data.data[0].value;
      });
    }
    getList();
    const containerData: containerProps = {
      title: title.value,
      showToolBar: false,
    };
    return {
      content,
      containerData,
    };
  },
});
</script>

<style lang="scss">
.editor-container {
  width: 100%;
  height: 100%;
}
.md {
  height: 857px;
}
</style>
