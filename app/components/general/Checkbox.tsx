import { FieldValues, UseFormRegister } from "react-hook-form";

interface CheckboxProps {
  id: string;
  register: UseFormRegister<FieldValues>
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, register, label }) => {
  return (
    <div className="flex items-center gap-2 my-2">
      <input id={id} type="checkbox" {...register(id)} />
      <label className="text-slate-500 text-sm" htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox
/**
 * Checkbox Compt, register func'nu bir prop olarak alıyor ve 
 * bu func'u input elemanına uyguluyor. Bu, input elemanının formun 
 * bir parçası olarak kaydedilmesini ve react-hook-form tarafından 
 * yönetilmesini sağlar. İşte bu yüzden register(id) şeklinde kullanılıyor; 
 * bu, id ile belirtilen form alanını kaydeder.
 * 
 * Bu Comp'i CreateForm.tsx te kullancagım
 */