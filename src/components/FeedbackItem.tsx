import type { FeedbackItemType } from "../types/Types";

const FeedbackItem = ({
  nameOfAttribute,
  description,
  score,
}: FeedbackItemType) => {
  const calculateBgColor = (score: number): string => {
    const colors: { [key: number]: string } = {
      1: "bg-red-900",
      2: "bg-red-700",
      3: "bg-orange-600",
      4: "bg-orange-400",
      5: "bg-yellow-400",
      6: "bg-yellow-300",
      7: "bg-lime-300",
      8: "bg-emerald-400",
      9: "bg-emerald-300",
      10: "bg-green-400",
    };

    return colors[score];
  };

  const bgColor = calculateBgColor(score);

  const calculateTextColor = (score: number): string => {
    const lightTextScores = [1, 2, 3, 4]; // dark backgrounds → use white text

    return lightTextScores.includes(score) ? "text-white" : "text-black";
  };
  const textColor = calculateTextColor(score);

  return (
    <div className={`${textColor} flex flex-col gap-1`}>
      <div className={`${bgColor} rounded-xl`}>
        <p className="font-semibold">{nameOfAttribute}</p>
        <p className="font-bold">
          {score}
          /10
        </p>
      </div>
      <p className={`${bgColor} rounded-xl p-1 font-light`}>{description}</p>
    </div>
  );
};

export default FeedbackItem;
