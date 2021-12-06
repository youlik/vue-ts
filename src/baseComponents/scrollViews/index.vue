<template>
  <div class="scroll-views-container">
    <div
      v-for="(item, index) in list"
      :key="index"
      :class="{ animatess: animatess && !index }"
    >
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "scrollViews",
  setup() {
    let list: Array<string> = [
      "千山鸟飞绝，万径人踪灭",
      "路漫漫其修远兮,吾将上下而求索。",
      "长风破浪会有时，直挂云帆济沧海。",
    ];
    let animatess = ref(false);
    let timeId = setInterval(() => {
      animatess.value = true;
      setTimeout(() => {
        list.push(list[0]);
        list.shift();
        animatess.value = false;
      }, 500);
    }, 2000);

    return { list, animatess };
  },
});
</script>

<style lang="scss" scoped>
.scroll-views-container {
  height: 100%;
  width: 300px;
  margin-left: 15px;
}

.animatess {
  transition: all 0.5s;
  margin-top: -50px;
}
</style>
