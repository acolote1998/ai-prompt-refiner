type PromptDisplayTipe = {
  title: string;
  content: string;
};
const PromptDisplay = ({ content, title }: PromptDisplayTipe) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default PromptDisplay;
