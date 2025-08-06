export type PromptRefinerResponse = {
  promptToImprove: string;
  refinedPrompt: string;
  initialPromptFeedback: {
    rating: {
      clarity: number;
      specificity: number;
      contextProvided: number;
      answerability: number;
      focus: number;
    };
    tips: [{ tip1: string }, { tip2: string }, { tip3: string }];
  };
};
