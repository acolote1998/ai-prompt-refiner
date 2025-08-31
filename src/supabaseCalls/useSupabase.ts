import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export const getApiKeyByUserId = async (
  userId: string
): Promise<{ key: string } | null> => {
  const { data, error } = await supabase
    .from("user_api_keys")
    .select("key")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    console.error("Supabase error:", error);
    return null;
  }

  return data;
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
