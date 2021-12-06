<template>
  <el-pagination background layout="prev, pager, next" :total="pageInfo.total">
  </el-pagination>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "basePagination",
  props: {
    pageInfo: {
      type: Object,
      default: () => {
        return {
          total: 100,
          size: 0,
          page: 1,
        };
      },
    },
  },
});
</script>

<style></style>
