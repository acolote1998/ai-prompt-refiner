export type PromptRefinerResponse = {
  promptToImprove: string;
  refinedPrompt: string;
  initialPromptFeedback: {
    rating: {
      clarity: {
        score: number;
        description: string;
      };
      specificity: {
        score: number;
        description: string;
      };
      contextProvided: {
        score: number;
        description: string;
      };
      answerability: {
        score: number;
        description: string;
      };
      focus: {
        score: number;
        description: string;
      };
    };
    tips: [{ tip1: string }, { tip2: string }, { tip3: string }];
  };
};

export type FeedbackItemType = {
  nameOfAttribute: string;
  score: number;
  description: string;
};
