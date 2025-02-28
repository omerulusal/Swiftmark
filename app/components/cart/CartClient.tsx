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
  const toplamFiyat = topUruns?.reduce((acc: number, item: UrunKartiProps) => acc + (item.quantity * item.price), 0)
  const stil = "w-1/5"
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <PageContainer>
        <div className="max-w-8xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-5 gap-4 pb-4 border-b text-sm font-medium text-gray-600">
            <div className={stil}>Ürün Resmi</div>
            <div className={stil}>Ürün Adı</div>
            <div className={stil}>Ürün Miktarı</div>
            <div className={stil}>Ürün Fiyatı</div>
            <div className={stil}>İşlem</div>
          </div>

          <div className="divide-y">
            {topUruns.map((urn, ind) => (
              <div key={ind} className="py-6">
                <div className="grid grid-cols-5 gap-4 items-center">
                  <div className="relative h-20 w-20 rounded-lg overflow-hidden">
                    <Image 
                      fill 
                      src={urn?.image} 
                      alt="urun" 
                      className="object-contain" 
                    />
                  </div>
                  <div className="font-medium text-gray-800">{urn?.name}</div>
                  <div className="flex justify-center">
                    <Sayac 
                      arttirFunc={() => urnQtyArttir(urn)} 
                      azaltFunc={() => urnQtyAzalt(urn)} 
                      urunKarti={urn} 
                    />
                  </div>
                  <div className="font-bold text-teal-700">{urn?.price} €</div>
                  <div>
                    <Button 
                      text='Ürünü Sil' 
                      outline 
                      onClick={() => sptenSil(urn)} 
                      small 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 mt-6 border-t">
            <button 
              onClick={() => tumnSil()} 
              className="text-red-600 hover:text-red-700 underline text-sm font-medium"
            >
              Sepeti Temizle
            </button>
            <div className="text-2xl font-bold text-teal-700">
              Toplam: {toplamFiyat} €
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

export default CartClient
/**
 * 
 */