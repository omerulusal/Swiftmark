"use client"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
interface InputProps {
  id: string;
  placeholder: string,
  disabled?: boolean,
  type: string,
  required: boolean,
  register: UseFormRegister<FieldValues>//hookformdan gelicek
  errors: FieldErrors;//hookformdan gelicek
}

const Input: React.FC<InputProps> = ({
  id, placeholder, disabled, type, required, register, errors,
}) => {
  return (
    <input
      id={id} placeholder={placeholder}
      type={type}
      {...register(id, { required })}//react-hook-formda gereken yapı
      disabled={disabled}
      className={`w-32 gap-3 md:gap-0 mx-5 md:mx-0  md:w-full h-12 p-3 rounded-md outline-none my-2 ${errors[id] ? "border border-red-500" : "border border-slate-300"}`}
    />
  )
}

export default Input
/**
 * https://react-hook-form.com/get-started (inputtaki register yapısını buradan aldım)
 */