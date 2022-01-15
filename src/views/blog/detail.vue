<template>
  <ViewContainer :list="containerData">
    <template v-slot:tool>
      <BaseButton label="返回" type="primary" @click="back"></BaseButton>
    </template>
    <md-editor
      v-model="content"
      height="857px"
      previewOnly
      prettier
    ></md-editor>
    <process-bar v-if="!content"></process-bar>
  </ViewContainer>
</template>
<script lang="ts" setup>
import { defineComponent, reactive, ref } from "vue";
import "md-editor-v3/lib/style.css";
import ViewContainer, {
  containerProps,
} from "@/baseComponents/viewContainer/index.vue";
import MdEditor from "md-editor-v3";
import { useRoute } from "vue-router";
import { getBlog } from "@/api/blog";
import router from "@/router";
import ProcessBar from "@/components/processBar.vue";

    let content = ref("");
    let title = ref("");
    let route = useRoute();
    let id = route.query.blogId;
    function getList() {
      getBlog().then((res: any) => {
        let currentBlog = res[0];
        content.value = currentBlog?.content;
        title.value = currentBlog.title;
      });
    }
    getList();
    const containerData: containerProps = {
      title: title.value,
      showToolBar: true,
    };
    function back() {
      router.back();
    }

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
