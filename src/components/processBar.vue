<template>
  <div class="main-container">
    <div
      :class="bar.className"
      :style="{ opacity: bar.opacity }"
      v-for="(bar, index) in bars"
      :key="index"
    ></div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from "vue";
export default defineComponent({
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const bars = reactive([
      {
        opacity: 0.5,
        className: "small-bar",
      },
      {
        opacity: 0.5,
        className: "middle-bar",
      },
      {
        opacity: 0.5,
        className: "high-bar",
      },
      {
        opacity: 0.5,
        className: "middle-bar",
      },
      {
        opacity: 0.5,
        className: "small-bar",
      },
    ]);
    let barIndex = 0;
    const timeId = setInterval(() => {
      barIndex > 4 && (barIndex = 0);
      for (let i in bars) {
        bars[i].opacity = 0.1;
      }
      bars[barIndex].opacity = 1;
      barIndex++;
    }, 500);
    console.log(props.isShow);
    !props.isShow && clearInterval(timeId);
    return {
      bars,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-container {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
}
.small-bar {
  height: 20px;
  width: 10px;
  background-color: aqua;
  margin-right: 5px;
}

.middle-bar {
  height: 50px;
  width: 10px;
  background-color: aqua;
  margin-right: 5px;
}

.high-bar {
  height: 100px;
  width: 10px;
  background-color: aqua;
  margin-right: 5px;
}
</style>
