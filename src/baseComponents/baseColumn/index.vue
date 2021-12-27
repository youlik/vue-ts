<template>
  <el-table-column :label="label" :prop="prop" :width="width">
    <!-- <template v-if="!prop">
      <slot></slot>
    </template> -->
    <template v-slot="{ row }">
      <span v-if="prop">
        {{ row[`${prop}`] }}
      </span>
      <slot v-else :row="row"></slot>
    </template>
  </el-table-column>
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
