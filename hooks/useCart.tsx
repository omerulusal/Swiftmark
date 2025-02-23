"use client"
import { UrunKartiProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
interface KartContextProps {
    urnKartQty: number;//KartContext'e bu tipte bir veri gelecek
    topUruns: UrunKartiProps[] | null;
    sptEkle: (urun: UrunKartiProps) => void;
    sptenSil: (urun: UrunKartiProps) => void;
    tumnSil: () => void;
    urnQtyArttir: (urun: UrunKartiProps) => void;
    urnQtyAzalt: (urun: UrunKartiProps) => void;

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
    }, [topUruns])

    useEffect(() => {
        const getItem: any = localStorage.getItem("cart")//localstoreage'taki "cart" adlı depoyu aldım
        const getItemParse: UrunKartiProps[] | null = JSON.parse(getItem)//
        setTopUruns(getItemParse)//localstoreage'ta bulunan ürünleri ürünsepetine ekledim
    }, [])

    const sptenSil = useCallback((urun: UrunKartiProps) => {
        if (topUruns) {
            const filtreliUruns = topUruns.filter(prd => prd.id !== urun.id)
            setTopUruns(filtreliUruns)
            toast.success("Ürün Sepetten Silindi")
            localStorage.setItem("cart", JSON.stringify(filtreliUruns))
        }
    }, [topUruns])

    const tumnSil = useCallback(() => {
        setTopUruns([])
        toast.success("Sepet Temizlendi.")
        localStorage.removeItem("cart")
    }, [])

    const urnQtyArttir = useCallback((urun: UrunKartiProps) => {
        let urnArttir;
        if (urun.quantity == 10) {
            return toast.error("Daha Fazla Ürün Eklenemez");
        }
        if (topUruns) {
            urnArttir = [...topUruns];//tüm ürünleri çektim
            const existingItem = topUruns?.findIndex(item => item.id === urun.id)
            // tüm ürünler içerisinde dışardan gelen ürün var mı kontrol ettim.
            if (existingItem > -1) {
                urnArttir[existingItem].quantity = ++urnArttir[existingItem].quantity
                // arttırılacak ürünün miktarını 1 arttırdım.
            }
            setTopUruns(urnArttir)
            localStorage.setItem("cart", JSON.stringify(urnArttir))
        }
    }, [topUruns])

    const urnQtyAzalt = useCallback((urun: UrunKartiProps) => {
        let urnAzalt;
        if (urun.quantity == 1) {
            return toast.error("Daha Az Ürün Eklenemez");
        }
        if (topUruns) {
            urnAzalt = [...topUruns];//tüm ürünleri çektim
            const existingItem = topUruns?.findIndex(item => item.id === urun.id)
            // tüm ürünler içerisinde dışardan gelen ürün var mı kontrol ettim.
            if (existingItem > -1) {
                urnAzalt[existingItem].quantity = --urnAzalt[existingItem].quantity
                // azaltılacak ürünün miktarını 1 azalttım.
            }
            setTopUruns(urnAzalt)
            localStorage.setItem("cart", JSON.stringify(urnAzalt))
        }
    }, [topUruns])

    let value = { urnKartQty, sptEkle, topUruns, sptenSil, tumnSil, urnQtyArttir, urnQtyAzalt }//dışarıdan kullanmak istediğim değerleri ekledim
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