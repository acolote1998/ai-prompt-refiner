import { useUser } from "@clerk/clerk-react";
import useGetKey from "../hooks/useGetKey";
import { updateApiKeyByUserId } from "../supabaseCalls/useSupabase";

const Settings = () => {
  const { user } = useUser();

  const { data: keyFromUser } = useGetKey(user?.id);

  if (!user) {
    return null; // or return a loading state
  }

  return (
    <div>
      <p>Settings</p>
      <p>Key: {keyFromUser ? keyFromUser.key : "No key found"}</p>
      <p
        onClick={() => {
          if (user) updateApiKeyByUserId(user.id, "usernewkey");
        }}
      >
        UPDATE KEY
      </p>
    </div>
  );
};

export default Settings;
