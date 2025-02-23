"use client"
import UseCart from "@/hooks/useCart"
import { useRouter } from "next/navigation"
import { MdShoppingBasket } from "react-icons/md"
const CardCount = () => {
  const { topUruns } = UseCart()//contexten sepete Ekleye gönderdiğim ürünleri çektim
  const spanStil = "translate-x-0 flex text-xs  text-teal-600 bg-black justify-center items-center absolute -top-2 -right-2 rounded-full w-[18px] h-[18px] font-extrabold text-center"
  const router = useRouter()

  return (
    <div className="hidden md:flex relative cursor-pointer" onClick={() => router.push("/cart")}>
      <MdShoppingBasket size={24} />
      <span className={spanStil}>{topUruns?.length}</span>
    </div>
  )
}

export default CardCount

/**
 * md:flex ile pc de göruncek aynısını searchtada yaptım
 */