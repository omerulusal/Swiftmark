"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
  const router = useRouter();
  return (
    <div className="cursor-pointer" onClick={() => router.push("/")}>
      <Image alt="logo" src={"/swiftmark.png"} width={120} height={120} />
    </div>
  )
}

export default Logo