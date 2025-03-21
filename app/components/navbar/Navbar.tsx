import React from 'react'
import Logo from './Logo'
import Search from './Search'
import CardCount from './CardCount'
import User from './User'
import Hamburger from './Hamburger'
import { getCurrentUser } from '@/app/actions/getCurrentUser'

const Navbar = async () => {
  const currentUser = await getCurrentUser()
  return (
    <div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-[#24342e] text-slate-100'>
      <Logo />
      <Search />
      <CardCount />
      <User currentUser={currentUser ? {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        emailVerified: currentUser.emailVerified ? new Date(currentUser.emailVerified) : null,
        image: currentUser.image,
        hashedPassword: currentUser.hashedPassword,
        createdAt: currentUser.createdAt ? new Date(currentUser.createdAt) : new Date(),
        updateAt: currentUser.updatedAt ? new Date(currentUser.updatedAt) : new Date(),
        role: currentUser.role
      } : null} />
      
      <Hamburger />
    </div>
  )
}

export default Navbar