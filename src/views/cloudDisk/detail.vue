<template>
  <view-container :list="containerData">
    <template v-slot:tool>
      <base-button
        type="primary"
        label="返回"
        align="center"
        @click="router.back()"
      ></base-button>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
        :show-file-list="false"
        multiple
        :limit="1"
        @change="(file: any) => upload(file)"
      >
        <base-button type="primary" label="上传" align="center"></base-button>
        <!-- <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template> -->
      </el-upload>
    </template>
    <base-table :list="list">
      <base-column label="文件名称" prop="name"></base-column>
      <base-column label="文件大小" prop="size"></base-column>
      <base-column label="更新时间" prop="updated_at"></base-column>
      <base-column label="操作" width="150">
        <template v-slot="{ row }">
          <base-button
            type="primary"
            label="下载"
            align="center"
            @click="download(row.name)"
          ></base-button>
        </template>
      </base-column>
    </base-table>
  </view-container>
</template>

<script lang="ts">
import { getDiskList, downLoadFile, upLoadFile } from "@/api/disk";
import { defineComponent, ref, reactive } from "vue";
import BaseColumn from "@/baseComponents/baseColumn/index.vue";
import { containerProps } from "@/baseComponents/viewContainer/index.vue";
import BaseButton from "../../baseComponents/baseButton/index.vue";
import { transfromTime } from "@/utils/timeFunc";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
export default defineComponent({
  components: { BaseColumn, BaseButton },
  setup() {
    let list: any = reactive([]);
    const route = useRoute();
    const router = useRouter();
    let blobData = ref("");
    let uuid = JSON.parse(localStorage.getItem("supabase.auth.token") as string)
      .currentSession.user.id;
    const containerData: containerProps = { title: "云盘", showToolBar: true };
    function getList() {
      getDiskList(`${uuid}/${route.query.diskName}`).then((res: any) => {
        res.forEach((item: any, index: number) => index && list.push(item));
        list = list.forEach((item: any) => {
          item.size = `${item.metadata.size}b`;
          item.updated_at = transfromTime(item.updated_at);
        });
      });
    }
    function download(fileName: string) {
      downLoadFile(`${uuid}/${route.query.diskName}/${fileName}`).then(
        (res: any) => {
          const blob = new Blob([res], {
            // 如何后端没返回下载文件类型，则需要手动设置：type: 'application/pdf;chartset=UTF-8' 表示下载文档为pdf，如果是word则设置为msword，excel为excel
            type: `application/${fileName.split(".")[1]};chartset=UTF-8`,
          });
          const a = document.createElement("a");
          // 兼容webkix浏览器，处理webkit浏览器中href自动添加blob前缀，默认在浏览器打开而不是下载
          const URL = window.URL || window.webkitURL;
          // 根据解析后的blob对象创建URL 对象
          const herf = URL.createObjectURL(blob);
          // 下载链接
          a.href = herf;
          // 下载文件名,如果后端没有返回，可以自己写a.download = '文件.pdf'
          a.download = `${fileName}`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          // 在内存中移除URL 对象
          window.URL.revokeObjectURL(herf);
          ElMessage.success("下载成功！");
        }
      );
    }

    function upload(file: any) {
      upLoadFile(file).then((res) => {
        console.log("res");
      });
    }
    getList();

    return {
      containerData,
      list,
      download,
      downLoadFile,
      blobData,
      upload,
      router,
    };
  },
});
</script>

<style lang="scss" scoped></style>
