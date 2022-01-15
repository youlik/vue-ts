import { supabase } from "@/lib/supabase";
import { Session, Provider } from "@supabase/supabase-js";
// 登录
async function getBlog() {
  try {
    const { data, error } = await supabase.from("blog").select();
    return data;
  } catch (error) {
    console.error("Error thrown:", error.message);
    // alert(error.error_description || error);
  }
}
interface blogDataInterface {
  title: string;
  content: string;
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

export { getBlog, addBlog };
