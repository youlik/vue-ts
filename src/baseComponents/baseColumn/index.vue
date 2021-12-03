<template>
  <div style="width: 100%; height: 50px">
    <el-table-column :label="label" :prop="`${prop}`">
      <slot></slot>
    </el-table-column>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "baseColumn",
  props: {
    label: {
      type: String,
      default: "张三",
    },
    type: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "",
    },
  },
});
</script>

<style></style>
