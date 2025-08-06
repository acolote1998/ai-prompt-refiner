import { useState } from "react";
import { callGemini } from "../hooks/useGemini";
import type { PromptRefinerResponse } from "../types/Types";
import FeedbackItem from "./FeedbackItem";
import TipComponent from "./TipComponent";
import PromptDisplay from "./PromptDisplay";
type PromptRefinerType = { geminiKey: string };
const PromptRefiner = ({ geminiKey }: PromptRefinerType) => {
  const [promptToRefine, setPromptToRefine] = useState<string>("");
  const [promptResponse, setPromptResponse] = useState<PromptRefinerResponse>();
  const [isPromptFeedbackVisible, setisPromptFeedbackVisible] =
    useState<boolean>(false);
  const [isOriginalPromptVisible, setIsOriginalPromptVisible] =
    useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {!promptResponse && (
        <>
          <h1 className="text-lg">
            Please write the prompt you want to refine
          </h1>
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
        </>
      )}
      {promptResponse && (
        <>
          <div className="flex flex-col">
            <p
              onClick={() => {
                setIsOriginalPromptVisible((prev) => !prev);
              }}
            >
              {isOriginalPromptVisible ? "Hide" : "Show"} original prompt
            </p>
            {isOriginalPromptVisible && (
              <PromptDisplay
                content={promptResponse.promptToImprove}
                title="Original Prompt"
              />
            )}
            <PromptDisplay
              content={promptResponse.refinedPrompt}
              title="Refined Prompt"
            />
          </div>
          <p
            onClick={() => {
              setisPromptFeedbackVisible((prev) => !prev);
            }}
          >
            {isPromptFeedbackVisible ? "Hide" : "Show"} prompt feedback
          </p>
          {isPromptFeedbackVisible && (
            <div>
              <h2 className="text-3xl font-bold m-5">Prompt Feedback</h2>
              <div className="grid grid-cols-5 m-3 gap-3">
                <FeedbackItem
                  description={
                    promptResponse.initialPromptFeedback.rating.clarity
                      .description
                  }
                  nameOfAttribute="Clarity"
                  score={
                    promptResponse.initialPromptFeedback.rating.clarity.score
                  }
                />
                <FeedbackItem
                  description={
                    promptResponse.initialPromptFeedback.rating.specificity
                      .description
                  }
                  nameOfAttribute="Specificity"
                  score={
                    promptResponse.initialPromptFeedback.rating.specificity
                      .score
                  }
                />
                <FeedbackItem
                  description={
                    promptResponse.initialPromptFeedback.rating.contextProvided
                      .description
                  }
                  nameOfAttribute="Context Provided"
                  score={
                    promptResponse.initialPromptFeedback.rating.contextProvided
                      .score
                  }
                />
                <FeedbackItem
                  description={
                    promptResponse.initialPromptFeedback.rating.answerability
                      .description
                  }
                  nameOfAttribute="Answerability"
                  score={
                    promptResponse.initialPromptFeedback.rating.answerability
                      .score
                  }
                />
                <FeedbackItem
                  description={
                    promptResponse.initialPromptFeedback.rating.focus
                      .description
                  }
                  nameOfAttribute="Focus"
                  score={
                    promptResponse.initialPromptFeedback.rating.focus.score
                  }
                />
              </div>
              <h2 className="text-3xl font-bold m-5">
                Tips to improve your prompts
              </h2>
              <div className="flex flex-col">
                <TipComponent
                  tipText={promptResponse.initialPromptFeedback.tips[0].tip1}
                />
                <TipComponent
                  tipText={promptResponse.initialPromptFeedback.tips[1].tip2}
                />
                <TipComponent
                  tipText={promptResponse.initialPromptFeedback.tips[2].tip3}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PromptRefiner;
