"use client"
import { Product } from "@prisma/client"
import ProductCard from "./ProductCard"

interface ProductsProps {
  products: Product[]
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>Ürün bulunamadı</div>
  }

  return (
    <div>
      <div className="flex gap-4 flex-wrap md:gap-7 items-center px-3 md:px-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products

/**
 * default oluşturdugum productsları utilsten cektim 
 * sonra herbirini mapleyip ProductCard'a yolladım
 */