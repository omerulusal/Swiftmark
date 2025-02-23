"use client"
import { UrunKartiProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
interface KartContextProps {
    urnKartQty: number;//KartContext'e bu tipte bir veri gelecek
    topUruns: UrunKartiProps[] | null;
    sptEkle: (urun: UrunKartiProps) => void;
    sptenSil: (urun: UrunKartiProps) => void;
}
const KartContext = createContext<KartContextProps | null>(null);
// context ya KartContextProps türünde ya da boş olucak

interface Props {
    [propName: string]: any;
    //provider'a herhangi bir string isimde ve türde özellik geçilebilir.
}
export const KartContextProvider = (props: Props) => {
    const [urnKartQty, setUrnKartQty] = useState(0);
    const [topUruns, setTopUruns] = useState<UrunKartiProps[] | null>(null)
    const sptEkle = useCallback((urun: UrunKartiProps) => {
        setTopUruns(prev => {
            let guncelSpt;
            if (prev) guncelSpt = [...prev, urun]//zaten sepette ürünler varsa sepete yeni gönderdiğin ürünüde ekle
            else guncelSpt = [urun]//eğer sepette ürün yoksa yeni ürünü ekle
            localStorage.setItem("cart", JSON.stringify(guncelSpt))
            //sepete eklediğim ürünleri "cart" adıyla localstorage'a kaydettim
            toast.success("Sepete Eklendi")
            return guncelSpt//sepetteki ürünleri döndür.
        });
    }, [])
    useEffect(() => {
        const getItem: any = localStorage.getItem("cart")//localstoreage'taki "cart" adlı depoyu aldım
        const getItemParse: UrunKartiProps[] | null = JSON.parse(getItem)//
        setTopUruns(getItemParse)//localstoreage'ta bulunan ürünleri ürünsepetine ekledim
    }, [])
    const sptenSil = useCallback((urun: UrunKartiProps) => { }, [])
    let value = { urnKartQty, sptEkle, topUruns, sptenSil }//dışarıdan kullanmak istediğim değerleri ekledim
    return (
        <KartContext.Provider value={value} {...props} />
    )
}

const UseCart = () => {
    const context = useContext(KartContext);
    if (context == null) throw new Error("Bir Hata Oluştu");
    return context
}
export default UseCart

/**
 * Context API oluşturdum. 
 * Önce contexti oluşturdum daha sonra contextin Provider yapısını kodladım bunu exportlayıp provider
 * klasöründe KartPorvider icerisinde karşıladım ve children alacağını belirttim(layoutta sarmalamak için)
 * sonra UseCart adında func oluşturdum ve bu KartContext'imi kullanacğımı belirttim eğer contexi boş olursa
 * hata fırlatacak doluysa da contexi döndürecektir. 
 * *********************************************************************************************************
 * urnKartQty karttaki ürün(satın almaya hazır) miktarıdır örneğin 3 Iphone veya 1 macbook
 * topUruns sepete eklenecek ürünlerin toplandığı arraydir. örn[4 Iphone,1Asus,5Samsung]
 */