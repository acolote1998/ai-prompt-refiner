import { promptAttributeExplanations } from "../util/promptAttributeExplanations";
import { useState } from "react";
import { callGemini } from "../hooks/useGemini";
import type { PromptRefinerResponse } from "../types/Types";
type PromptRefinerType = { geminiKey: string };
const PromptRefiner = ({ geminiKey }: PromptRefinerType) => {
  const [promptToRefine, setPromptToRefine] = useState<string>("");
  const [promptResponse, setPromptResponse] = useState<PromptRefinerResponse>();

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
          setPromptResponse(answerGemini);
        }}
      >
        Refine
      </p>
      {promptResponse && (
        <>
          <div className="flex flex-col">
            <p>Refined prompt:</p>
            <textarea
              className="bg-white w-[70vw] h-[20vh] text-sm"
              value={promptResponse.refinedPrompt}
              readOnly
            />
          </div>
          <div className="flex flex-col items-center text-center justify-center w-[50vw]">
            Feedback:
            <ul>
              <li>
                Clarity:{" "}
                {promptResponse.initialPromptFeedback.rating.clarity.score}
                /10
                <p>
                  {
                    promptResponse.initialPromptFeedback.rating.clarity
                      .description
                  }
                </p>
              </li>
              <li>
                Specificity:
                {promptResponse.initialPromptFeedback.rating.specificity.score}
                /10
                <p>
                  {
                    promptResponse.initialPromptFeedback.rating.specificity
                      .description
                  }
                </p>
              </li>
              <li>
                Context Provided:
                {
                  promptResponse.initialPromptFeedback.rating.contextProvided
                    .score
                }
                /10
                <p>
                  {
                    promptResponse.initialPromptFeedback.rating.contextProvided
                      .description
                  }
                </p>
              </li>
              <li>
                Answerability:
                {
                  promptResponse.initialPromptFeedback.rating.answerability
                    .score
                }
                /10
                <p>
                  {
                    promptResponse.initialPromptFeedback.rating.answerability
                      .description
                  }
                </p>
              </li>
              <li>
                Focus: {promptResponse.initialPromptFeedback.rating.focus.score}
                /10
                <p>
                  {
                    promptResponse.initialPromptFeedback.rating.focus
                      .description
                  }
                </p>
              </li>
            </ul>
            Tips:
            <ul>
              <li>
                Tip 1: {promptResponse.initialPromptFeedback.tips[0].tip1}
              </li>
              <li>
                Tip 2: {promptResponse.initialPromptFeedback.tips[1].tip2}
              </li>
              <li>
                Tip 3: {promptResponse.initialPromptFeedback.tips[2].tip3}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default PromptRefiner;
