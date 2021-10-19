<template>
  <ViewContainer :list="containerData">
    <template v-slot:tool>
      <BaseButton label="添加" type="primary" @click="addBlog"></BaseButton>
    </template>
    <div class="content-container">
      <blog-card
        :list="item"
        v-for="(item, index) in cardList"
        @click="routerTo"
        :key="index"
      ></blog-card>
    </div>
  </ViewContainer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import ViewContainer, {
  containerProps,
} from "@/baseComponents/viewContainer/index.vue";
import { getBlogList } from "@/api/https_data";
import BlogCard from "./blogCard.vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Index",
  components: {
    ViewContainer,
    BlogCard,
  },
  setup() {
    let content = ref("");
    const route = useRouter();
    let cardList = ref([]);
    let cardData = {
      title: "博客",
      time: "2021-01-01",
      content: "缩",
      label: "vue",
    };
    const containerData: containerProps = { title: "首页", showToolBar: true };
    function addBlog(params: any) {
      route.push("addBlog");
    }
    function routerTo() {
      route.push("blogDetails");
    }

    getBlogList({}).then((res) => {
      console.log(res);
      cardList.value = res.data.data;
      cardList.value.forEach((item) => {
        item = Object.assign({}, item, { label: "555" });
      });
    });

    return {
      content,
      addBlog,
      cardData,
      containerData,
      cardList,
      routerTo,
    };
  },
});
</script>

<style lang="scss" scoped>
.content-container {
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
  &::-webkit-scrollbar-track-piece {
    background: #d3dce6;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #99a9bf;
    border-radius: 20px;
  }
}
</style>
