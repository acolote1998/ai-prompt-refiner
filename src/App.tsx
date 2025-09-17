import { useEffect, useState } from "react";
import PromptRefiner from "./components/PromptRefiner";

function App() {
  const [apiKey, setApiKey] = useState<string | null>(null);
  useEffect(() => {
    setApiKey(localStorage.getItem("gemini_api_key"));
  }, []);
  return (
    <>
      <h1 className="font-semibold text-3xl text-center m-2 ">
        Prompt Refiner
      </h1>
      {!apiKey && (
        <p className="text-center">
          Please go to the settings page and set up your Gemini Key to get
          started
        </p>
      )}
      {apiKey && <PromptRefiner geminiKey={apiKey} />}
      <div className="flex items-center justify-center"></div>
    </>
  );
}

export default App;
