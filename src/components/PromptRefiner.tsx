import { useState } from "react";
import { callGemini } from "../hooks/useGemini";
type PromptRefinerType = { geminiKey: string };
const PromptRefiner = ({ geminiKey }: PromptRefinerType) => {
  const [promptToRefine, setPromptToRefine] = useState<string>("");
  const [refinedPrompt, setRefinedPrompt] = useState<string>("");
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-lg">Please write the prompt you want to refine</h1>
      <textarea
        onChange={(e) => {
          setPromptToRefine(e.target.value);
        }}
        className="bg-white w-[70vw] h-[20vh] text-sm"
      />
      <p
        className="bg-amber-300 rounded-md p-2 m-5"
        onClick={async () => {
          const answerGemini = await callGemini(geminiKey, promptToRefine);
          setRefinedPrompt(answerGemini.refinedPrompt);
        }}
      >
        Refine
      </p>
      {refinedPrompt !== "" && (
        <div className="flex flex-col">
          <p>Refined prompt:</p>
          <textarea
            className="bg-white w-[70vw] h-[20vh] text-sm"
            value={refinedPrompt}
            readOnly
          />
        </div>
      )}
    </div>
  );
};

export default PromptRefiner;
