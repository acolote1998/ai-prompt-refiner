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
          <div className="cursor-default absolute bottom-10 right-10 md:bottom-auto md:right-5 p-1 bg-gray-800 rounded-lg text-green-500 font-light">
            Key successfully saved 🔑
          </div>
        ) : (
          'Please add a Gemini Key by pasting it below and then clicking "Update key"'
        )}
      </p>
      {!keyFromUser?.key && <HowToGetKey />}
      {keyIsUpdating && (
        <>
          <div>
            <p className="text-lg ">Please paste your key here</p>
            <input
              className="text-center bg-white rounded-lg mb-4 mt-1 w-[35vw]"
              type="password"
              onChange={(e) => {
                setKeyInput(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-2 items-center justify-center">
            <div
              className="cursor-pointer m-1 p-2 rounded-lg bg-green-400 font-semibold"
              onClick={async () => {
                if (user) {
                  await updateApiKeyByUserId(user.id, keyInput);
                  await queryClient.invalidateQueries({ queryKey: ["key"] });
                  setKeyIsUpdating((prev) => !prev);
                }
              }}
            >
              Save key 💾
            </div>
            <p
              className="cursor-pointer pl-4 pr-4 pt-2 pb-2 rounded-lg bg-red-500 text-white font-bold"
              onClick={() => {
                setKeyIsUpdating((prev) => !prev);
              }}
            >
              X
            </p>
          </div>
        </>
      )}
      {!keyIsUpdating && (
        <>
          <div
            className="cursor-pointer p-1 bg-yellow-500 rounded-lg text-black-500 font-bold"
            onClick={() => {
              setKeyIsUpdating((prev) => !prev);
            }}
          >
            Update your key 🔑
          </div>

          <p
            onClick={() => {
              setIsGuideToKeyVisible((prev) => !prev);
            }}
          >
            {isGuideToKeyVisible ? (
              <p className="mt-5 mb-1 font-semibold ">Hide guide</p>
            ) : (
              <p className="mt-5 font-light">
                Click here if you want to see how to get a key
              </p>
            )}
          </p>
          {isGuideToKeyVisible && <HowToGetKey />}
        </>
      )}
    </div>
  );
};

export default Settings;
