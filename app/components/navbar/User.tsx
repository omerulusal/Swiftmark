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
                <AiOutlineUser size={25} />
                <div>{currentUser ? currentUser.name : "User"}</div>
            </div>
            {openMenu && (
                <div className='absolute w-[200px] top-10 bg-teal-100 shadow-lg right-0 p-2 rounded-md'>
                    {
                        currentUser ? (
                            <div className='space-y-1'>
                                <div onClick={() => router.push("/admin/create")} className='text-slate-600 cursor-pointer'>Admin</div>
                                <div onClick={() => menuFunc("logout")} className='text-slate-600 cursor-pointer'>Logout</div>
                            </div>
                        ) : (
                            <div>
                                <div onClick={() => menuFunc("register")} className='text-slate-600 cursor-pointer'>Register</div>
                                <div onClick={() => menuFunc("login")} className='text-slate-600 cursor-pointer'>Login</div>
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