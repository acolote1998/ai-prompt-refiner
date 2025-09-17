import { useEffect, useState } from "react";
import HowToGetKey from "./HowToGetKey";
const Settings = () => {
  const [keyInput, setKeyInput] = useState<string>("");
  const [keyFromUser, setKeyFromUser] = useState<string | null>(null);
  const [keyIsUpdating, setKeyIsUpdating] = useState<boolean>(false);
  const [isGuideToKeyVisible, setIsGuideToKeyVisible] =
    useState<boolean>(false);
  useEffect(() => {
    setKeyFromUser(localStorage.getItem("gemini_api_key"));
  }, [keyIsUpdating]);

  return (
    <div>
      <p>
        {keyFromUser ? (
          <div className="cursor-default absolute bottom-10 right-10 md:bottom-auto md:right-5 p-1 bg-gray-800 rounded-lg text-green-500 font-light">
            Key successfully saved 🔑
          </div>
        ) : (
          'Please add a Gemini Key by pasting it below and then clicking "Update key"'
        )}
      </p>
      {!keyFromUser && <HowToGetKey />}
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
                localStorage.setItem("gemini_api_key", keyInput);
                setKeyIsUpdating((prev) => !prev);
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
            {keyFromUser ? "Update your key 🔑" : "Add your key 🔑"}
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
