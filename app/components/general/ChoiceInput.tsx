import { IconType } from "react-icons";

interface ChoiceProps {
  text: string;
  icon: IconType;
  selected: boolean;
  onClick: (value: any) => void;
}
const ChoiceInput: React.FC<ChoiceProps> = ({ text, selected, onClick, icon: Icon }) => {
  return (
    <div onClick={() => onClick(text)} className={`my-3 px-4 py-2 cursor-pointer rounded flex items-center gap-2 justify-center h-16 border ${selected ? "border-black" : "border-gray-300"}`}>
      <Icon size={24} />
      <span className="text-slate-700 text-lg">{text}</span>
    </div>
  )
}

export default ChoiceInput