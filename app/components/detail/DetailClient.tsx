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
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[400px] w-[400px] mb-3 md:mb-0">
            <Image src={product?.image} fill alt="Product Image" />
          </div>
          <div className="w-full md:w-1/2 space-y-3">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <Rating name="read-only" value={rate} readOnly />
            <div className="text-slate-600">{product?.description}</div>
            <div className="flex items-center gap-2">
              <div>STOK DURUMU:</div>
              {product?.inStock ?
                <div className="text-green-500">Ürün Stokta Mevcut</div>
                : <div className="text-red-600">Ürün Stokta Yok</div>
              }
            </div>
            <div className="text-xl md:text-2xl text-teal-800 font-bold mt-5" >
              {`${product?.price} €`}
            </div>
            {
              displayBtn ? (
                <>
                  <Button onClick={() => { }} outline small text="Ürün Sepete Ekli" />
                </>
              )
                : (
                  <>
                    <Sayac urunKarti={urunKarti} arttirFunc={arttirFunc} azaltFunc={azaltFunc} />
                    <Button onClick={() => sptEkle(urunKarti)} small text="Sepete Ekle" />
                  </>
                )
            }

          </div>
        </div>
        <Heading fsBig text="Yorumlar" />
        <div className="mt-16">
          {product?.reviews && product?.reviews?.map((uYorum: any, ind: number) => {
            return (
              <Comment key={ind} uYorum={uYorum} />
            )
          })}
        </div>
      </PageContainer>
    </div>
  )
}

export default DetailClient

/**
 * product>[urunId] klasörlerinden product verileri gelir.
 */