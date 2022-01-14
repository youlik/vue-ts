import { supabase } from "@/lib/supabase";
import { Session, Provider } from "@supabase/supabase-js";
// 登录
async function getDiskList(diskName?: string) {
  try {
    const { data, error } = await supabase.storage
      .from("vue-ts-update")
      .list(`${diskName}`, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });
    return data;
  } catch (error) {
    console.error("Error thrown:", error.message);
    // alert(error.error_description || error);
  }
}

async function downLoadFile(path: string) {
  try {
    const { data, error } = await supabase.storage
      .from("vue-ts-update")
      .download(path);
    return data;
  } catch (error) {
    console.error("Error thrown:", error.message);
    // alert(error.error_description || error);
  }
}

async function upLoadFile(file: any) {
  try {
    const { data, error } = await supabase.storage
      .from("vue-ts-update")
      .upload(`电子书/${file.name}`, file.raw, {
        cacheControl: "3600",
        upsert: false,
      });
    return data;
  } catch (error) {
    console.error("Error thrown:", error.message);
    // alert(error.error_description || error);
  }
}

async function addDisk(bucketName: string) {
  try {
    const { data, error } = await supabase.storage
      .from("vue-ts-update")
      .upload(`${bucketName}/.emptyFolderPlaceHolder`, "");
    return data;
  } catch (error) {
    console.error("Error thrown:", error.message);
    // alert(error.error_description || error);
  }
}

async function deleteDisk(diskName: string) {
  try {
    const { data, error } = await supabase.storage
      .from("vue-ts-update")
      .remove([diskName]);
  } catch (error) {
    console.error("Error thrown:", error.message);
  }
}
async function addBucket() {
  try {
    const { data, error } = await supabase.storage.createBucket("avatars", {
      public: false,
    });
  } catch (error) {
    console.error("Error thrown:", error.message);
    // alert(error.error_description || error);
  }
}
export {
  getDiskList,
  downLoadFile,
  upLoadFile,
  addBucket,
  addDisk,
  deleteDisk,
};
