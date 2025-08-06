import type { FeedbackItemType } from "../types/Types";

const FeedbackItem = ({
  nameOfAttribute,
  description,
  score,
}: FeedbackItemType) => {
  return (
    <>
      <li>
        {nameOfAttribute}: {score}
        /10
        <p>{description}</p>
      </li>
    </>
  );
};

export default FeedbackItem;
