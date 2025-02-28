"use client"
import React, { useState } from 'react'
import PageContainer from '../containers/PageContainer'
import UseCart from '@/hooks/useCart'
import Image from 'next/image'
import Button from '../general/Button'
import { UrunKartiProps } from '../detail/DetailClient'
import Sayac from '../general/Sayac'

const CartClient = () => {
  const { topUruns, sptenSil, tumnSil, urnQtyArttir, urnQtyAzalt } = UseCart()
  console.log(topUruns, "UrunClient")
  if (!topUruns || topUruns.length == 0) {
    return <div className='text-red-700'>Sepetinizde Ürün Bulunmamaktadır.</div>
  }
  const toplamFiyat = topUruns?.reduce((acc: number, item: UrunKartiProps) => acc + (item.quantity * item.price), 0).toFixed(3)
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
                <div className={`${stil} flex justify-center ml-14`}>
                  <Sayac arttirFunc={() => urnQtyArttir(urn)} azaltFunc={() => urnQtyAzalt(urn)} urunKarti={urn} />
                </div>
                <div className={`${stil} text-gray-900 font-bold`}>{urn?.price} €</div>
                <div className={stil}>
                  <Button text='Ürünü Sil' outline onClick={() => sptenSil(urn)} small />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-between my-5 p-5 border-t'>
          <button onClick={() => tumnSil()} className='w-1/5 underline text-sm '>Sepeti Temizle</button>
          <div className='text-lg text-teal-700 font-bold md:text-2xl'>{toplamFiyat} €</div>
        </div>
      </PageContainer>
    </div>
  )
}

export default CartClient
/**
 * 
 */