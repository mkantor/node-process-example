import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config();

export const supabase = createClient(
  process.env.PROJECT_URL as string,
  process.env.API_KEY as string
);
