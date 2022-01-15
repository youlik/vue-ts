import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://c7g17oq5g6hbm7cikqa0.baseapi.memfiredb.com",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzE3OTk5NTEyNCwiaWF0IjoxNjQyMDc1MTI0LCJpc3MiOiJzdXBhYmFzZSJ9.ktphjblcJ2HNo0tO8YRi1rplxT9D2WzuTr_0J9RxD3M"
);
