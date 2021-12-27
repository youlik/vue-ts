<template>
  <view-container :list="containerData">
    <div style="display: flex; padding: 10px">
      <div
        v-for="(disk, index) in list"
        class="disk-container"
        @click="routerTo(disk.name)"
        :key="index"
      >
        <span class="title">名称：{{ disk.name }}</span>
        <span class="title">创建时间：{{ disk.created_at }}</span>
        <span class="title">更新时间：{{ disk.updated_at }}</span>
      </div>
    </div>
  </view-container>
</template>

<script lang="ts">
import { getDiskList } from "@/api/disk";
import { defineComponent, ref, reactive } from "vue";
import { containerProps } from "@/baseComponents/viewContainer/index.vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "disk",
  setup() {
    let list: any = reactive([]);
    const route = useRouter();
    const containerData: containerProps = { title: "云盘", showToolBar: true };
    function routerTo(diskName: string) {
      route.push({ path: "detail", query: { diskName } });
    }
    function getList() {
      getDiskList("").then((res: any) => {
        list.push(...res);
      });
    }
    getList();
    return {
      containerData,
      list,
      route,
      routerTo,
    };
  },
});
</script>

<style lang="scss" scoped>
.disk-container {
  width: 200px;
  height: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid;
  border-radius: 10px;
  margin-right: 24px;
  margin-bottom: 24px;
}
</style>
