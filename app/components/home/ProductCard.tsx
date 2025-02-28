"use client"
import textClip from "@/utils/textClip";
import { Rating } from "@mui/material"
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductProps {
  product: any;

}
const ProductCard: React.FC<ProductProps> = ({ product }) => {
  
  
  let rate = product?.reviews?.reduce((acc:number, item:any) => acc + item.rating, 0) / product?.reviews?.length
  // console.log(rate)
  // ! reduce ile ilgili açıklama yaz


  const router = useRouter();

  return (
    <div onClick={()=>router.push(`product/${product?.id}`)} className="w-[240px] shadow-lg p-2 rounded-md cursor-pointer flex flex-col flex-1">
      <div className="relative h-[150px]">
        <Image src={product.image} fill alt="product" className="object-contain" />
      </div>
      <div className="text-center mt-2 space-y-1 ">
        <div>
          {textClip(product.name)}
        </div>
        <Rating name="read-only" value={rate} readOnly />
        <div className="text-gray-400 text-start">
          {textClip(product.description)}
        </div>
        <div className="text-teal-950 font-bold text-lg md:text-xl">{product.price} €</div>
      </div>
    </div>
  )
}

export default ProductCard

/**
 * Products.tsx(Home componenti altındaki) ten gelen verilerle dodurdum.
 */