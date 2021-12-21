import { supabase } from "@/lib/supabase";
import { Session, Provider } from "@supabase/supabase-js";
// 登录
async function getMessage() {
  try {
    const { data, error } = await supabase.from("message").select();
    return data;
  } catch (error) {
    console.error("Error thrown:", error.message);
    // alert(error.error_description || error);
  }
}

export { getMessage };
