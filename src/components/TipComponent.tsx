type TipComonentType = {
  tipText: string;
};
const TipComponent = ({ tipText }: TipComonentType) => {
  return (
    <div className="bg-emerald-400  m-3 rounded-3xl pt-2 pb-2 text-left pl-5">
      <p style={{ color: "black" }} className="font-light text-lg">
        - {tipText}
      </p>
    </div>
  );
};

export default TipComponent;
