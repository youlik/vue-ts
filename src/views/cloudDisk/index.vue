<template>
  <view-container :list="containerData">
    <base-table :list="list">
      <base-column label="文件名称" prop="name"></base-column>
      <base-column label="文件大小" prop="metadata.size"></base-column>
      <base-column label="更新时间" prop="updated_at"></base-column>
      <base-column label="操作" prop="date"></base-column>
    </base-table>
  </view-container>
</template>

<script lang="ts">
import { getDiskList } from "@/api/disk";
import { defineComponent, ref, reactive } from "vue";
import BaseColumn from "@/baseComponents/baseColumn/index.vue";
import ViewContainer, {
  containerProps,
} from "@/baseComponents/viewContainer/index.vue";

export default defineComponent({
  components: { BaseColumn },
  setup() {
    let list: any = reactive([]);
    const containerData: containerProps = { title: "云盘", showToolBar: true };
    function getList() {
      getDiskList().then((res: any) => {
        res.forEach((item: any, index: number) => index && list.push(item));
        console.log(list);
      });
    }
    getList();
    return {
      containerData,
      list,
    };
  },
});
</script>

<style lang="scss" scoped></style>
