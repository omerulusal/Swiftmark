"use client"
import React from 'react'
import PageContainer from '../containers/PageContainer'
import UseCart from '@/hooks/useCart'
import Image from 'next/image'
import Button from '../general/Button'

const CartClient = () => {
  const { topUruns } = UseCart()
  console.log(topUruns, "UrunClient")
  if (!topUruns || topUruns.length == 0) {
    return <div className='text-red-700'>Sepetinizde Ürün Bulunmamaktadır.</div>
  }

  const stil = "w-1/5"
  return (
    <div className='my-3 md:my-10'>
      <PageContainer>
        <div className='flex items-center gap-3 text-center border-b py-3'>
          <div className={stil}>Ürün Resmi</div>
          <div className={stil}>Ürün Adı</div>
          <div className={stil}>Ürün Miktarı</div>
          <div className={stil}>Ürün Fiyatı</div>
        </div>
        <div>
          {topUruns.map((urn, ind) => (
            <div key={ind} className='my-10'>
              <div className='flex items-center text-center'>
                <div className={`${stil} flex items-center justify-center`}>
                  <Image className='' width={60} height={50} src={urn?.image} alt="urun" />
                </div>
                <div className={stil}>{urn?.name}</div>
                <div className={stil}>
                  {urn?.quantity}
                </div>
                <div className={`${stil} text-gray-900 font-bold`}>{urn?.price} €</div>
                <div className={stil}>
                  <Button text='Ürünü Sil' outline onClick={() => { }} small />
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  )
}

export default CartClient
/**
 * 
 */