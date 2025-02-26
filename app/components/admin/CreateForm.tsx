"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Checkbox from "../general/Checkbox"
import { MdComputer, MdPhone, MdSportsTennis } from "react-icons/md"
import { GiBallerinaShoes, GiDress, GiHouse } from "react-icons/gi"
import ChoiceInput from "../general/ChoiceInput"
import Button from "../general/Button"
import { useState } from "react"
import toast from "react-hot-toast"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebaseApp from "@/libs/firebase"

const CreateForm = () => {
  const [resim, setResim] = useState<File | null>(null)
  let [yuklenenRsm, setYuklenenRsm] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      price: "",//api/product'ta parsefloat ettigimden number olucak
      image: "",
      inStock: false,

    }

  })
  const onSubmit: SubmitHandler<FieldValues> = async(veri) => {
    console.log(veri)
    const handleChange = async () => {
      toast.success("Yukleme işlemi Başarılı")
      try {
        const storage = getStorage(firebaseApp);
        const storageRef = ref(storage, 'images/swift.jpg');
        const uploadTask = uploadBytesResumable(storageRef, resim);

        await new Promise<void>((resolve, reject) => {
          uploadTask.on('state_changed',
            (snapshot) => {
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            },
            (error) => {
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setYuklenenRsm(downloadURL);
              });
              resolve();
            }
          );
        })


      } catch (error) {
        console.log(error)
        toast.error("Bir Hata Mevcut...")

      }
    }
    await handleChange()
    let yeniVeri = { ...veri, image: yuklenenRsm }
    console.log(yeniVeri,"NEWDATTAAA")
  }

  const kategoriler = [
    {
      name: "Telefon",
      icon: MdPhone,
    },
    {
      name: "Bilgisayar",
      icon: MdComputer,
    },
    {
      name: "Ayakkabı",
      icon: GiBallerinaShoes,
    },
    {
      name: "Ev Dekorasyon",
      icon: GiHouse,
    },
    {
      name: "Kıyafet",
      icon: GiDress,
    },
    {
      name: "Spor",
      icon: MdSportsTennis,
    },
  ]
  const kategori = watch("category")
  const setCustomDeger = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    })
  }


  const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // secilen bir file varsa img state'ine ilk file'ı yollar
      setResim(e.target.files[0])
    }
  }
  console.log("DOSYAAA", resim)

  return (
    <div>
      <Heading text="Urun Oluştur" center />
      <Input
        placeholder="Ad" type="text"
        id="name" errors={errors}
        register={register} required
      />
      <Input
        placeholder="Acıklama" type="text"
        id="description" errors={errors}
        register={register} required
      />
      <Input
        placeholder="Marka" type="text"
        id="brand" errors={errors}
        register={register} required
      />
      <Input
        placeholder="Fiyat" type="number"
        id="price" errors={errors}
        register={register} required
      />
      <Checkbox
        id="inStock" label="Urun Stokta Mevcut Mu?"
        register={register}
      />
      <div className="flex flex-wrap gap-3">
        {kategoriler.map((ktgr, ind) => (
          <ChoiceInput key={ind}
            icon={ktgr.icon}
            onClick={(deger) => setCustomDeger("category", deger)}
            selected={kategori == ktgr.name}
            text={ktgr.name}
          />
        ))}
      </div>
      <input className="mb-2 bg-teal-50 border rounded text-slate-600" type="file" onChange={changeFunc} />
      <Button onClick={handleSubmit(onSubmit)} text="Urun Oluştur" />
      {/* Click yaptıgımda onSubmit'teki dataları görecegim(consolda)  */}
    </div>
  )
}

export default CreateForm
/**
 * Inputtaki id'ler defaultValues'taki keylerle aynı olmalı yoksa eşleşmez
 * bu Comp'i, admin/create sayfasında kullandım
 * 
 * https://firebase.google.com/docs/storage/web/upload-files
 * Firebase dosya yukleme dökumanı (Promiseli bir yapıda ekledim)
 */