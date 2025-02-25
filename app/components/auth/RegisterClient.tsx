"use client"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import AuthContainer from "../containers/AuthContainer"
import Button from "../general/Button"
import Heading from "../general/Heading"
import Input from "../general/Input"
import { FaGoogle } from "react-icons/fa"
import Link from "next/link"
import axios from "axios"
import toast from "react-hot-toast"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"


const RegisterClient = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FieldValues>()
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post("/api/register", data).then(() => {
      // api/register'a veriyi yolladım route.ts icinde verilerle user oluşturdum 
      toast.success("Kullanıcı Oluşturuldu")
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false
      }).then((callback) => {
        if (callback?.ok) {
          router.push("/cart")
          router.refresh()//sayfa yenilenecek
          toast.success("Login İşlemi Başarılı");
        }
        if (callback?.error) {
          toast.error(callback.error)
        }
      })
    }).catch(() => {
      toast.error("Kullanıcı oluşturulurken bir hata oluştu")
    })
  }
  // Bu üstteki Yapıyı react hook form dökümanından aldım


  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-2xl rounded-md shadow-teal-900">
        <Heading text="Register" center />
        <div className="">
          <Input placeholder="Ad" type="text" id="name" errors={errors} register={register} required />
          <Input placeholder="Email" type="mail" id="email" errors={errors} register={register} required />
          <Input placeholder="Şifre" type="password" id="password" errors={errors} register={register} required />
        </div>
        <div className="mt-3 border border-b-0 border-zinc-300 mx-auto w-72"></div>
        <div className="my-3 flex gap-5">
          <Button outline small onClick={handleSubmit(onSubmit)} text="Kayıt Ol" />
          <Button small icon={FaGoogle} outline onClick={() => { }} text="Google İle Üye Ol" />
        </div>
        <Link className="text-xs underline hover:no-underline ml-1 text-slate-500 hover:text-teal-700 hover:text-sm transform ease-in duration-500" href={"/login"}>Zaten bir hesabım var.</Link>
      </div>
    </AuthContainer>
  )
}

export default RegisterClient