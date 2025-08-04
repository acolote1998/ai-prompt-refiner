import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rdipiauvmkkifzzfsznn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkaXBpYXV2bWtraWZ6emZzem5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyOTk4NzEsImV4cCI6MjA2OTg3NTg3MX0.2zuG2xzar4daak9NFbZHTdN1ymjzDv7Iz5pfTwiSjv4";
const supabase = createClient(supabaseUrl, supabaseKey);

export const getApiKeyByUserId = async (userId: string) => {
  const dbResponse = await supabase
    .from("user_api_keys")
    .select("key")
    .eq("user_id", userId);
  console.log(dbResponse);
};

export const updateApiKeyByUserId = async (userId: string, newKey: string) => {
  await supabase
    .from("user_api_keys")
    .delete()
    .eq("user_id", userId)
    .select("*");

  const dbResponseInsertingNewKey = await supabase
    .from("user_api_keys")
    .insert({ user_id: userId, key: newKey });
  return dbResponseInsertingNewKey;
};
