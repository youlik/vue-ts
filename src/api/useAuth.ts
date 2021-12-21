import { ref } from "vue";
import { supabase } from "@/lib/supabase";
import { Session, Provider } from "@supabase/supabase-js";

const userSession = ref<Session | null>(null);
interface Credentials {
  email?: string | undefined;
  password?: string | undefined;
  provider?: "bitbucket" | "github" | "gitlab" | "google" | undefined;
}
// 登录
async function handleLogin(credentials: Credentials) {
  try {
    const { error, user } = await supabase.auth.signIn({
      email: credentials.email,
      password: credentials.password,
    });
    if (error) {
      //   alert("Error logging in: " + error.message);
    }
    // No error throw, but no user detected so send magic link
    if (!error && !user) {
      //   alert("Check your email for the login link!");
    }
  } catch (error) {
    console.error("Error thrown:", error.message);
    // alert(error.error_description || error);
  }
}

async function handleRegister(credentials: Credentials) {
  try {
    const { error, user } = await supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password,
    });
    if (error) {
      //   alert("Error logging in: " + error.message);
    }
    // No error throw, but no user detected so send magic link
    if (!error && !user) {
      alert("Check your email for the login link!");
    }
  } catch (error) {
    console.error("Error thrown:", error.message);
    // alert(error.error_description || error);
  }
}
export { handleLogin, userSession, handleRegister };
