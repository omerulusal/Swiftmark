"use client"
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineUser } from "react-icons/ai"

interface CurrentUserProps {
    currentUser: User | null | undefined
}

const User: React.FC<CurrentUserProps> = ({ currentUser }) => {
    const [openMenu, setOpenMenu] = useState<Boolean>(false)
    const router = useRouter();

    const menuFunc = (type: string) => {
        setOpenMenu(false)
        if (type === "logout") {
            signOut()
            //next auth ile çıkış işlemi gerçekleştirilir
            router.push("/")
        }
        else if (type === "register") {
            router.push("/register")
        } else {
            router.push("/login")
        }
    }

    return (
        <div onClick={() => setOpenMenu(pre => !pre)} className='hidden md:flex relative'>
            <div className='flex items-center gap-1 cursor-pointer'>
                <AiOutlineUser size={25} className=' mb-1.5 ' />
                <div>{currentUser ? currentUser.name : "User"}</div>
                {/* Mevcut kullanıcının adını yazar yoksa User Yazar */}
            </div>
            {openMenu && (
                <div className='absolute w-[120px] top-10 bg-black/80 shadow-2xl right-0 p-2 rounded-md z-50 flex justify-center '>
                    {
                        currentUser ? (
                            //Kullanıcı varsa bu alan görunecek
                            <div className='space-y-1'>
                                <div onClick={() => router.push("/admin/create")} className='text-slate-300 cursor-pointer  hover:text-gray-100'>Admin</div>
                                <div onClick={() => menuFunc("logout")} className='text-slate-300 cursor-pointer  hover:text-gray-100'>Logout</div>
                            </div>
                        ) : (
                            //Kullanıcı yoksa bu alan görunecek
                            <div>
                                <div onClick={() => menuFunc("register")} className='text-slate-300 cursor-pointer  hover:text-gray-100'>Register</div>
                                <div onClick={() => menuFunc("login")} className='text-slate-300 cursor-pointer hover:text-gray-100'>Login</div>
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    )
}

export default User

/**
 * onClick={()=>setOpenMenu(!openMenu)} de yapabilirdim ama 
 * () => setOpenMenu(pre => !pre) bu daha saglıklı bir yontem
 */