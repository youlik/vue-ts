<template>
  <div class="view-container">
    <div class="tool-bar-container">
      <div
        style="width: 50%;font-size:16px; line-height: 50px; text-align: left; padding: 0 5px"
      >
        {{ list.title }}
      </div>
      <div
        style="
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 5px;
        "
      >
        <slot name="tool" v-if="list.showToolBar"></slot>
      </div>
    </div>
    <div class="content-container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
// 定义所需参数的接口
export interface containerProps {
  title: string;
  showToolBar: boolean;
}
export default defineComponent({
  name: "viewContainer",
  components: {},
  props: {
    // 用list来接受参数
    list: {
      type: Object as PropType<containerProps>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.tool-bar-container {
  height: 50px;
  display: flex;
  width: 100%;
  border-radius: 5px;
  background-color: $green-1;
}

.view-container {
  width: 85%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: #dcdcdc;
}

.content-container {
  height: calc(100% - 60px);
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff;
  position: relative;
}
</style>
