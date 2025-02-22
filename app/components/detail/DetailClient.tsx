"use client"
import Image from "next/image"
import PageContainer from "../containers/PageContainer"
import Sayac from "../general/Sayac"
import { useState } from "react"

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
  console.log(product, "from detailClient")
  const [urunKarti, setUrunKarti] = useState<UrunKartiProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,//sayfa yüklendiğinde ürünün miktarı 1 olucak(sepete ekleme için)
    image: product.image,
    inStock: product.inStock,
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



  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[400px] w-[400px]">
            <Image src={product?.image} fill alt="Product Image" />
          </div>
          <div className="w-1/2 space-y-3">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <div className="text-slate-600">{product?.description}</div>
            <div className="flex items-center gap-2">
              <div>STOK DURUMU:</div>
              {product?.inStock ?
                <div className="text-green-500">Ürün Stokta Mevcut</div>
                : <div className="text-red-600">Ürün Stokta Yok</div>
              }
            </div>
            <Sayac urunKarti={urunKarti} arttirFunc={arttirFunc} azaltFunc={azaltFunc} />
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