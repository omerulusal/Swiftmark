import { IconType } from "react-icons"

interface ButtonProps {
  text: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  small?: boolean,
  outline?: boolean,
  icon?: IconType,
  disabled?: boolean,
}


const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  small,
  outline,
  icon: Icon,
  disabled,
}) => {
  return (
    <button type="button"
      className={`rounded-lg p-3 duration-700
        ${outline ? "border hover:bg-slate-200 text-black" : "bg-black text-white"} 
        ${small ? "w-full md:w-[250px]" : "w-full"}`}
      disabled={disabled} onClick={onClick}
    >
      {Icon && <Icon />}
      {text}
    </button>
  )
}

export default Button