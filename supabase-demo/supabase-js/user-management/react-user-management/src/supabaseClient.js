/**
 * lib/supabaseClient.js
 * Helper to initialize the Supabase client.
 */

import { createClient } from "@supabase/supabase-js";

export const REACT_APP_SUPABASE_URL = "http://localhost:8090";
export const REACT_APP_SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE";

const supabaseUrl = REACT_APP_SUPABASE_URL;
const supabaseAnonKey = REACT_APP_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
