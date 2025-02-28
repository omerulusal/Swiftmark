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
import axios from "axios"
import { useRouter } from "next/navigation"


const CreateForm = () => {
  const router = useRouter()
  const [img, setImg] = useState<File | null>(null)

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
  const onSubmit: SubmitHandler<FieldValues> = async (veri) => {
    try {
      if (!img) {
        toast.error("Lütfen bir resim seçiniz");
        return;
      }

      toast.loading("Resim yükleniyor...", { duration: 2500 });
      
      const storage = getStorage(firebaseApp);
      const storageRef = ref(storage, `images/${Date.now()}-${img.name}`);
      //storageRef, image'e benzersiz bir isim atar bu sayede tek görsel sorunu ortadan kalkar
      const uploadTask = uploadBytesResumable(storageRef, img);

      const downloadURL = await new Promise<string>((resolve, reject) => {
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          },
          (error) => {
            toast.error("Resim yükleme hatası!");
            reject(error);
          },
          async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(url);
          }
        );
      });

      const yeniVeri = { ...veri, image: downloadURL };
      
      await axios.post("/api/product", yeniVeri);
      toast.success("Ürün başarıyla eklendi");
      router.refresh();
      
    } catch (error) {
      console.log(error);
      toast.error("Ürün eklenirken bir hata oluştu");
    }
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
      setImg(e.target.files[0])
    }
  }
  console.log("DOSYAAA", img)

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
 * burada hook form ile inputtaki verileri takip edip kayıt altına alıyorum
 * hookformun handleSubmit methoduna onSubmit func'u veriyorum onun icerisine 
 * inputlardaki veriler geliyor bu verilerle api/product urline axios ile post
 * yapıyorum tabii aynı zamanda firebase'e yolladıgım image'ıda ekliyorum sonra
 * bu veriler dbye kaydediliyor.
 * 
 * https://firebase.google.com/docs/storage/web/upload-files
 * Firebase dosya yukleme dökumanı (Promiseli bir yapıda ekledim)
 */