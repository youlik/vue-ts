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

export { getBlog };
