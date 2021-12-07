<template>
  <div class="el-table-container">
    <el-table :data="list" height="100%" border>
      <slot></slot>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "baseTable",
  props: {
    list: Array,
  },
});
</script>

<style lang="scss" scoped>
.el-table-container {
  padding: 10px;
  height: calc(100% - 80px);
}
</style>
