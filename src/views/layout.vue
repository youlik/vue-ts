<template>
  <slider></slider>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// el-table 使用中文
import { ElConfigProvider } from "element-plus";
import slider from "./slider.vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
export default defineComponent({
  components: {
    slider,
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    };
  },
});
</script>

<style lang="scss" scoped></style>
