type PromptDisplayTipe = {
  title: string;
  content: string;
};
const PromptDisplay = ({ content, title }: PromptDisplayTipe) => {
  return (
    <div className="bg-gray-600 text-white pl-10 pr-10 rounded-lg m-2 pt-5 pb-5 flex flex-col gap-3">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="rounded border-1">{content}</p>
    </div>
  );
};

export default PromptDisplay;
