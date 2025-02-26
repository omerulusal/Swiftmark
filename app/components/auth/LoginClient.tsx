"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import AuthContainer from "../containers/AuthContainer"
import Button from "../general/Button"
import Heading from "../general/Heading"
import Input from "../general/Input"
import { FaGoogle } from "react-icons/fa"
import Link from "next/link"
import { signIn } from "next-auth/react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { User } from "@prisma/client"
import { useEffect } from "react"

interface LoginClientProps {
  currentUser: User | null | undefined
}

const LoginClient: React.FC<LoginClientProps> = ({ currentUser }) => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FieldValues>()
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signIn("credentials", {
      ...data,
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
  }
  // Bu üstteki Yapıyı react hook form dökümanından aldım

  useEffect(() => {
    if (currentUser) {
      // Eger sayfa yuklendiginde currentUser varsa kişi giriş yapmıştır.
      router.push("/cart");
      router.refresh();
    }
  }, []);

  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-2xl rounded-md shadow-teal-900">
        <Heading text="Login" center />
        <div className="">
          <Input placeholder="Email" type="mail" id="email" errors={errors} register={register} required />
          <Input placeholder="Şifre" type="password" id="password" errors={errors} register={register} required />
        </div>
        <div className="mt-3 border border-b-0 border-zinc-300 mx-auto w-72"></div>
        <div className="my-3 flex gap-5">
          <Button outline small onClick={handleSubmit(onSubmit)} text="Giriş Yap" />
          <Button small icon={FaGoogle} outline onClick={() => signIn("google")} text="Google İle Giriş Yap" />
        </div>
        <Link className="text-xs underline hover:no-underline ml-1 text-slate-500 hover:text-teal-700 hover:text-sm transform ease-in duration-500" href={"/register"}>Kayıt Ol</Link>
      </div>
    </AuthContainer>
  )
}

export default LoginClient
/**
 * currentUser login sayfasındaki page.tsx'ten gelir.
 * mevcut user login yaptıktan sonra url'e login yazıp tekrar yapmaya calışırsa
 * /cart sayfasına yönlendirilecek. 
 */