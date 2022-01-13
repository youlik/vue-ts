<template>
  <view-container :list="containerData">
    <template v-slot:tool>
      <base-button
        type="primary"
        label="新建"
        @click="dialogVisible = true"
      ></base-button>
    </template>
    <div style="display: flex; padding: 10px; flex-wrap: wrap">
      <div
        v-for="(disk, index) in list"
        class="disk-container"
        @mousemove="diskName = disk.name"
        @mouseleave="diskName = ''"
        @click="routerTo(disk.name)"
        :style="{ backgroundColor: diskName === disk.name ? 'grey' : '' }"
        :key="index"
      >
        <img src="@/assets/项目云盘.png" />
        <span class="title">{{ disk.name }}</span>
        <span>创建时间：{{ disk.created_at }}</span>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" title="新建文件夹" width="30%">
      <div style="overflow: hidden">
        <base-input label="名称" v-model="bucketName"></base-input>
      </div>
      <template #footer>
        <div style="display: flex; justify-content: flex-end">
          <base-button
            type="primary"
            label="取消"
            @click="dialogVisible = false"
          ></base-button>
          <base-button
            type="primary"
            label="提交"
            @click="add(bucketName)"
          ></base-button>
        </div>
      </template>
    </el-dialog>
  </view-container>
</template>

<script lang="ts">
import { getDiskList, addBucket, addDisk } from "@/api/disk";
import { defineComponent, ref, reactive } from "vue";
import { containerProps } from "@/baseComponents/viewContainer/index.vue";
import { useRouter } from "vue-router";
import BaseButton from "../../baseComponents/baseButton/index.vue";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "disk",
  setup() {
    let list: any = reactive([]);
    const route = useRouter();
    let dialogVisible = ref(false);
    let diskName = ref("");
    let bucketName = ref("");
    const containerData: containerProps = { title: "云盘", showToolBar: true };
    function routerTo(diskName: string) {
      route.push({ path: "detail", query: { diskName } });
    }
    function getList() {
      getDiskList("").then((res: any) => {
        list.push(...res);
      });
    }
    function add(bucketName: string) {
      addDisk(bucketName).then((res) => {
        ElMessage.success("新增成功");
        getList();
      });
    }
    addBucket();
    getList();
    return {
      containerData,
      list,
      bucketName,
      dialogVisible,
      routerTo,
      add,
      diskName,
    };
  },
  components: { BaseButton },
});
</script>

<style lang="scss" scoped>
.disk-container {
  width: 200px;
  height: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
  cursor: pointer;
  .title {
    font-weight: bold;
  }
}
</style>
