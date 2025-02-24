"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import AuthContainer from "../containers/AuthContainer"
import Button from "../general/Button"
import Heading from "../general/Heading"
import Input from "../general/Input"
import { FaGoogle } from "react-icons/fa"
import Link from "next/link"

const LoginClient = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FieldValues>()
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }
  // Bu üstteki Yapıyı react hook form dökümanından aldım


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
          <Button small icon={FaGoogle} outline onClick={() => { }} text="Google İle Giriş Yap" />
        </div>
          <Link className="text-xs underline hover:no-underline ml-1 text-slate-500 hover:text-teal-700 hover:text-sm transform ease-in duration-500" href={"/register"}>Kayıt Ol</Link>
      </div>
    </AuthContainer>
  )
}

export default LoginClient