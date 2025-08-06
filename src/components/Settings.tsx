import { useUser } from "@clerk/clerk-react";
import useGetKey from "../hooks/useGetKey";
import { updateApiKeyByUserId } from "../supabaseCalls/useSupabase";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import HowToGetKey from "./HowToGetKey";
const Settings = () => {
  const { user } = useUser();
  const [keyInput, setKeyInput] = useState<string>("");
  const { data: keyFromUser } = useGetKey(user?.id);
  const queryClient = useQueryClient();
  const [keyIsUpdating, setKeyIsUpdating] = useState<boolean>(false);
  const [isGuideToKeyVisible, setIsGuideToKeyVisible] =
    useState<boolean>(false);
  if (!user) {
    return null; // or return a loading state
  }

  return (
    <div>
      <p>
        {keyFromUser?.key ? (
          <div className="bg-gray-800 rounded-lg text-green-500 font-light">
            Gemini key successfully saved
          </div>
        ) : (
          'Please add a Gemini Key by pasting it below and then clicking "Update key"'
        )}
      </p>
      {!keyFromUser?.key && <HowToGetKey />}
      {keyIsUpdating && (
        <>
          <input
            className="bg-white rounded-lg"
            type="password"
            onChange={(e) => {
              setKeyInput(e.target.value);
            }}
          />
          <p
            onClick={async () => {
              if (user) {
                await updateApiKeyByUserId(user.id, keyInput);
                await queryClient.invalidateQueries({ queryKey: ["key"] });
                setKeyIsUpdating((prev) => !prev);
              }
            }}
          >
            Save key
          </p>
        </>
      )}
      {!keyIsUpdating && (
        <>
          <p
            onClick={() => {
              setKeyIsUpdating((prev) => !prev);
            }}
          >
            Add / change your key
          </p>

          <p
            onClick={() => {
              setIsGuideToKeyVisible((prev) => !prev);
            }}
          >
            {isGuideToKeyVisible
              ? "Hide guide"
              : "Click here if you want to see how to get a key"}
          </p>
          {isGuideToKeyVisible && <HowToGetKey />}
        </>
      )}
    </div>
  );
};

export default Settings;
