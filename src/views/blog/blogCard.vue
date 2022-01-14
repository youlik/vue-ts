<template>
  <div class="blog-card-container">
    <div class="text-title">时间：{{ transfromTime(list.updated_at) }}</div>
    <span class="text-highlight">{{ list.title }}</span>
    <!-- <span>{{content}}</span> -->
    <div
      class="label-container"
      :style="{
        backgroundColor: colors[list.label],
        color: list.label ? '#ffffff' : '',
      }"
      @click.stop="() => {}"
    >
      {{ types[list.label] }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref, PropType } from "vue";
import { transfromTime } from "@/utils/timeFunc";
interface blogCardProps {
  title: string;
  content: string;
  label: number;
  updated_at: string;
}
export default defineComponent({
  name: "viewContainer",
  components: {},
  props: {
    // 用list来接受参数

    list: {
      type: Object as PropType<blogCardProps>,
      required: true,
    },
  },

  setup(props) {
    const types: string[] = ["未分类", "Vue", "React", "JavaScript"];
    const colors: string[] = ["", "#87CEFA", "#FFB6C1", "	#FFDAB9"];
    const content = computed(() => {
      let contentData = getSimpleText(props.list.content);
      console.log(contentData);
      return contentData.slice(0, 20);
    });
    const time = computed(() => {
      return transfromTime(props.list.updated_at);
    });
    function getSimpleText(html: any) {
      var re1 = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
      var msg = html.replace(re1, ""); //执行替换成空字符
      return msg;
    }

    return {
      content,
      time,
      types,
      colors,
      transfromTime,
    };
  },
});
</script>

<style lang="scss" scoped>
.blog-card-container {
  width: 100%;
  height: 125px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #e5e6eb;
  position: relative;
}

.text-title {
  line-height: 22px;
  margin-bottom: 8px;
}

.text-highlight {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #1d2129;
  text-align: left;
  margin-bottom: 8px;
}

.label-container {
  position: absolute;
  top: 12px;
  right: 20px;
  // border: 1px solid #c9cdd4;
  box-sizing: border-box;
  border-radius: 2px;
  line-height: 18px;
  text-align: center;
  color: #c9cdd4;
  font-size: 13px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
