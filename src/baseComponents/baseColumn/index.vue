<template>
  <el-table-column :label="label" :prop="prop"> </el-table-column>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "baseColumn",
  props: {
    label: {
      type: String,
      default: "",
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
