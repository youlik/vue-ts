<template>
  <ViewContainer :list="containerData">
    <template v-slot:tool>
      <!-- <BaseButton label="添加" type="primary" @click="addBlog"></BaseButton> -->
    </template>
    <div class="content-container">
      <blog-card
        :list="item"
        v-for="(item, index) in cardList"
        @click="routerTo(item.id)"
        :key="index"
      ></blog-card>
    </div>
    <process-bar v-if="!cardList.length"></process-bar>
  </ViewContainer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import ViewContainer, {
  containerProps,
} from "@/baseComponents/viewContainer/index.vue";
import { getBlog } from "@/api/blog";
import BlogCard from "./blogCard.vue";
import { useRouter } from "vue-router";
import processBar from "@/components/processBar.vue";
export default defineComponent({
  name: "Index",
  components: {
    ViewContainer,
    BlogCard,
    processBar,
  },
  setup() {
    const route = useRouter();
    let cardList: any = ref([]);
    const containerData: containerProps = { title: "首页", showToolBar: true };
    function addBlog(params: any) {
      route.push("addBlog");
    }
    function routerTo(id: string) {
      route.push({ path: "blogDetails", query: { blogId: id } });
    }

    function getBlogList(): void {
      getBlog().then((res) => {
        cardList.value = res;
      });
    }
    getBlogList();
    return {
      addBlog,
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
  overflow-y: hidden;
  // padding: 10px;
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
