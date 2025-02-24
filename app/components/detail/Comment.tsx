"use client"
import { Rating } from "@mui/material"
import { RxAvatar } from "react-icons/rx"

const Comment = ({ uYorum }: { uYorum: any }) => {
  return (
    <div className="border w-full md:w-1/3 p-2 rounded-lg my-6 hover:bg-slate-200">
      <div className="flex gap-3 px-4 items-center mb-2 mt-8">
        <RxAvatar size={25} />
        <div>{uYorum?.user?.name ? uYorum?.user?.name : "User"}</div>
        <Rating size='small' name="read-only" value={uYorum?.rating} readOnly />
      </div>
      <div className="px-4 pb-4 font-sans text-gray-500 max-w-2xl">{uYorum?.review}</div>
    </div>
  )
}

export default Comment
/**
 * Comment componentini DetailClient.tsx'te kullandım.
 * Eğer yorum yapan userların adları varsa yazar yoksa ekranda "User" yazar
 * 
 */