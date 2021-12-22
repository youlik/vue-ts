<template>
  <ViewContainer :list="containerData">
    <el-input
      label="添加标题"
      v-model="title"
      placeholder="输入文章标题"
    ></el-input>
    <md-editor v-model="content"></md-editor>
    <template v-slot:tool>
      <BaseButton label="提交" type="primary" @click="confrim"></BaseButton>
    </template>
  </ViewContainer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import "md-editor-v3/lib/style.css";
import ViewContainer, {
  containerProps,
} from "@/baseComponents/viewContainer/index.vue";
import MdEditor from "md-editor-v3";
import BaseButton from "@/baseComponents/baseButton/index.vue";
import { addBlog } from "@/api/blog";
export default defineComponent({
  name: "Home",
  components: {
    ViewContainer,
    MdEditor,
    BaseButton,
  },
  setup() {
    let content = ref("");
    let title = ref("");
    function confrim(params: any) {
      console.log("触发");
      addBlog({
        id: 7,
        created_at: new Date(),
        updated_at: new Date(),
        title: title.value,
        context: content.value,
        label: 1,
      });
    }
    const containerData: containerProps = {
      title: "添加博客",
      showToolBar: true,
    };
    return {
      content,
      confrim,
      containerData,
      title,
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
  height: 800px;
}
</style>
