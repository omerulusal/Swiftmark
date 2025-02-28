"use client"
import Image from "next/image"
import PageContainer from "../containers/PageContainer"
import Sayac from "../general/Sayac"
import { useEffect, useState } from "react"
import { Rating } from "@mui/material"
import Button from "../general/Button"
import Comment from "./Comment"
import Heading from "../general/Heading"
import UseCart from "@/hooks/useCart"

export type UrunKartiProps = {
  id: string,
  name: string,
  description: string,
  price: number,
  quantity: number,
  image: string,
  inStock: boolean,
}


const DetailClient = ({ product }: { product: any }) => {
  const [urunKarti, setUrunKarti] = useState<UrunKartiProps>({
    id: product?.id,
    name: product?.name,
    description: product?.description,
    price: product?.price,
    quantity: 1,//sayfa yüklendiğinde ürünün miktarı 1 olucak(sepete ekleme için)
    image: product?.image,
    inStock: product?.inStock,
  })


  const arttirFunc = () => {
    if (urunKarti.quantity == 10) return;
    //sepette gönderilen ürün miktarı en fazla 10 olabilir
    setUrunKarti(prev => ({ ...prev, quantity: prev.quantity + 1 }))
  }
  const azaltFunc = () => {
    if (urunKarti.quantity == 1) return;
    //sepette gönderilen ürün miktarı en az 1 olabilir
    setUrunKarti(prev => ({ ...prev, quantity: prev.quantity - 1 }))
  }
  const rate = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length
  // rate'in açıklamasını Product Carttan bulabilirsin
  const { sptEkle, topUruns,urnKartQty } = UseCart()//useContext


  const [displayBtn, setDisplayBtn] = useState<boolean>(false)
  useEffect(() => {
    setDisplayBtn(false)
    const controlDisplay: any = topUruns?.findIndex((kart) => kart.id == product.id);
    if (controlDisplay > -1) {
      setDisplayBtn(true)
    }
  }, [topUruns, product?.id]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <PageContainer>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="block md:flex gap-10">
              <div className="relative h-[400px] w-full md:w-[500px] mb-6 md:mb-0 rounded-lg overflow-hidden">
                <Image 
                  src={product?.image} 
                  fill 
                  alt="Product Image" 
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">{product?.name}</h1>
                <Rating name="read-only" value={rate} readOnly className="text-yellow-400" />
                <p className="text-gray-600 leading-relaxed">{product?.description}</p>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium">STOK DURUMU:</span>
                  {product?.inStock ? (
                    <span className="text-green-500 font-medium">Ürün Stokta Mevcut</span>
                  ) : (
                    <span className="text-red-500 font-medium">Ürün Stokta Yok</span>
                  )}
                </div>
                <div className="text-3xl font-bold text-teal-700">{product?.price} €</div>
                <div className="pt-4">
                  {displayBtn ? (
                    <Button 
                      onClick={() => {}} 
                      outline 
                      small 
                      text="Ürün Sepete Ekli" 
                    />
                  ) : (
                    <div className="space-y-4">
                      <Sayac 
                        urunKarti={urunKarti} 
                        arttirFunc={arttirFunc} 
                        azaltFunc={azaltFunc} 
                      />
                      <Button 
                        onClick={() => sptEkle(urunKarti)} 
                        small 
                        text="Sepete Ekle" 
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Heading fsBig text="Yorumlar" />
            <div className="grid md:grid-cols-2 gap-6">
              {product?.reviews?.map((uYorum: any, ind: number) => (
                <Comment key={ind} uYorum={uYorum} />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

export default DetailClient

/**
 * product>[urunId] klasörlerinden product verileri gelir.
 */