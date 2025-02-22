import React from 'react'
import Heading from '../general/Heading'
import { defaultUrunler } from '@/utils/DefaultProducts'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div >
      <Heading text='Tum Urunler' />
      <div className='flex gap-4 flex-wrap md:gap-7 items-center px-3 md:px-10'>
        {defaultUrunler.map((product) =>
          <ProductCard key={product.id} product={product} />
        )}
      </div>
    </div>
  )
}

export default Products

/**
 * default oluşturdugum productsları utilsten cektim 
 * sonra herbirini mapleyip ProductCard'a yolladım
 */