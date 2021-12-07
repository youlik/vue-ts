<template>
  <div style="pagination-contianer">
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.total"
    >
    </el-pagination>
  </div>
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

<style lang="scss" scoped>
.pagination-contianer {
  background-color: aqua;
}
</style>
