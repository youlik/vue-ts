<template>
  <view-container :list="containerData">
    <template v-slot:tool>
      <base-button
        type="primary"
        label="新建"
        @click="dialogVisible = true"
      ></base-button>
    </template>
    <div style="display: flex; padding: 16px; flex-wrap: wrap">
      <div
        v-for="(disk, index) in list"
        class="disk-container"
        @click="routerTo(disk.name)"
        :key="index"
      >
        <img src="@/assets/项目云盘.png" style="width: 64px; height: 64px" />
        <span class="title">{{ disk.name }}</span>
        <img
          src="@/assets/删除.png"
          @click.stop="deleteCurrentDisk(disk.name)"
          style="
            width: 24px;
            height: 24px;
            position: absolute;
            top: -12px;
            right: 0px;
          "
        />
      </div>
    </div>
    <el-dialog
      v-model="dialogVisible"
      title="新建文件夹"
      width="30%"
      :show-close="false"
    >
      <base-input label="名称" v-model="bucketName"></base-input>
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

<script lang="ts" setup>
import { getDiskList, addBucket, addDisk, deleteDisk } from "@/api/disk";
import { defineComponent, ref, reactive } from "vue";
import { containerProps } from "@/baseComponents/viewContainer/index.vue";
import { useRouter } from "vue-router";
import BaseButton from "../../baseComponents/baseButton/index.vue";
import { ElMessage } from "element-plus";

let list: any = reactive([]);
const route = useRouter();
let dialogVisible = ref(false);
let diskName = ref("");
let bucketName = ref("");
let uuid = JSON.parse(localStorage.getItem("supabase.auth.token") as string)
  .currentSession.user.id;
const containerData: containerProps = { title: "云盘", showToolBar: true };
function routerTo(diskName: string) {
  route.push({ path: "detail", query: { diskName } });
}
function getList() {
  getDiskList(uuid).then((res: any) => {
    list.length = 0;
    res.shift();
    list.push(...res);
  });
}
function add(bucketName: string) {
  addDisk(`${uuid}/${bucketName}`).then((res) => {
    ElMessage.success("新增成功");
    getList();
    dialogVisible.value = false;
  });
}
function deleteCurrentDisk(diskName: string) {
  getDiskList(`${uuid}/${diskName}`).then((res: any) => {
    let fileList: any = [];
    res.forEach((item: any) => {
      fileList.push(deleteDisk(`${uuid}/${diskName}/${item.name}`));
      Promise.all(fileList).then((all) => {
        getList();
      });
    });
  });
}
getList();
</script>

<style lang="scss" scoped>
.disk-container {
  width: 80px;
  height: 80px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
  border-radius: 8px;
  position: relative;
  background-color: rgba(135, 206, 250, 0.3);
  cursor: pointer;
  &:hover {
    background-color: rgba(135, 206, 250, 0.8);
  }
  .title {
    font-weight: bold;
  }
}
</style>
