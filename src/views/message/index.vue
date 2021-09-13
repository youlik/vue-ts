<template>
  <view-container :list="containerData">
    <div class="content" style="height: calc(100% - 162px)">
      <div
        class="message-item-container"
        v-for="(item, index) in list"
        :key="index"
      >
        <img class="img-container" />
        <div style="width: 100%">
          <div class="title" style="text-align: left">{{ item.name }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>

    <div class="editor-container">
      <el-input
        type="textarea"
        v-model="content"
        rows="3"
        resize="none"
      ></el-input>
      <div style="display: flex; justify-content: flex-end">
        <base-button
          label="提交"
          type="primary"
          @click="addMessage"
        ></base-button>
      </div>
    </div>
  </view-container>
</template>

<script lang="ts">
import ViewContainer, {
  containerProps,
} from "@/baseComponents/viewContainer/index.vue";
import { reactive, ref } from "_vue@3.1.5@vue";
import BaseButton from "@/baseComponents/baseButton/index.vue";
import axios from "axios";

export default {
  name: "index",
  components: { ViewContainer, BaseButton },
  setup() {
    const containerData: containerProps = { title: "首页", showToolBar: true };
    const list = ref([]);
    let content = ref("");
    function getList() {
      axios.get("/list/getMessage").then((res) => {
        list.value = res.data.data;
      });
    }
    function addMessage() {
      console.log(new Date());
      axios.post("/list/addMessage", {
        content: content.value,
      });
    }
    getList();
    return {
      containerData,
      list,
      content,
      addMessage,
    };
  },
};
</script>

<style lang="scss" scoped>
.message-item-container {
  height: 70px;
  border-bottom: 1px solid #e5e6eb;
  padding: 10px;
  display: flex;

  .img-container {
    height: 70px;
    width: 30px;
  }

  .content {
    height: calc(100% - 16px);
    flex: 1;
  }
}
.editor-container {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #fff;
  border-radius: 0.2px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  width: calc(85% - 20px);
  height: 162px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 1px solid #dcdcdc;
}
.edit-container {
  height: 122px;
  .img-container {
    width: 48px;
    height: 100%;
  }
}

.content {
  overflow-y: auto;
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
