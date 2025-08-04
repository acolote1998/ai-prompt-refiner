import { useUser } from "@clerk/clerk-react";
import useGetKey from "../hooks/useGetKey";
import { updateApiKeyByUserId } from "../supabaseCalls/useSupabase";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
const Settings = () => {
  const { user } = useUser();
  const [keyInput, setKeyInput] = useState<string>("");
  const { data: keyFromUser } = useGetKey(user?.id);
  const queryClient = useQueryClient();

  if (!user) {
    return null; // or return a loading state
  }

  return (
    <div>
      <p>Settings</p>
      <p>Key: {keyFromUser?.key ?? "No key found"}</p>
      <input
        className="bg-white rounded-lg"
        type="text"
        onChange={(e) => {
          setKeyInput(e.target.value);
        }}
      />
      <p
        onClick={async () => {
          if (user) {
            await updateApiKeyByUserId(user.id, keyInput);
            await queryClient.invalidateQueries({ queryKey: ["key"] });
          }
        }}
      >
        UPDATE KEY
      </p>
    </div>
  );
};

export default Settings;
