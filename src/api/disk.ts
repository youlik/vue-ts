import { supabase } from "@/lib/supabase";
import { Session, Provider } from "@supabase/supabase-js";
// 登录
async function getDiskList() {
  try {
    const { data, error } = await supabase.storage
      .from("vue-ts-update")
      .list("电子书", {
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
interface blogDataInterface {
  title: string;
  context: string;
  id: number;
  created_at: Date;
  updated_at: Date;
  label: number;
}

async function addBlog(blogData: blogDataInterface) {
  try {
    const { data, error } = await supabase.from("blog").insert(blogData);
    return data;
  } catch (error) {
    console.error("Error thrown:", error.message);
    // alert(error.error_description || error);
  }
}
export { getDiskList, addBlog };
