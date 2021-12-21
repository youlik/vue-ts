import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://c70kqd72pma31c7rlgeg.baseapi.memfiredb.com",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzE3Nzk3ODE4MiwiaWF0IjoxNjQwMDU4MTgyLCJpc3MiOiJzdXBhYmFzZSJ9.Ab5OK0K3MaQtKwaJO6m5GHesdsJqEmBoyR1COyrS6Kw"
);
