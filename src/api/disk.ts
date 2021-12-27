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

async function downLoadFile() {
  try {
    const { data, error } = await supabase.storage
      .from("vue-ts-update")
      .download("电子书/javascript高级程序设计.pdf");
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
export { getDiskList, downLoadFile, upLoadFile };
