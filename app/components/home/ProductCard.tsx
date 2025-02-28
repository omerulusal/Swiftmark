"use client"
import { Product } from "@prisma/client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import textClip from "@/utils/textClip"
import { Rating } from "@mui/material"

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const router = useRouter()

    const productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length

    return (
        <div onClick={() => router.push(`/product/${product.id}`)} className="max-w-[240px] min-w-[240px] min-h-[300px] shadow-lg p-2 rounded-md cursor-pointer flex flex-col flex-1">
            <div className="relative h-[150px]">
                <Image src={product.image} fill alt="product" className="object-contain" />
            </div>
            <div className="text-center mt-2 space-y-1">
                <div>{textClip(product.name)}</div>
                <Rating name="read-only" value={productRating} readOnly />
                <div className="text-teal-950 font-bold text-lg md:text-xl ">{product.price} €</div>
            </div>
        </div>
    )
}

export default ProductCard

/**
 * Products.tsx(Home componenti altındaki) ten gelen verilerle dodurdum.
 */