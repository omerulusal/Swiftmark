import React from 'react'
import Logo from './Logo'
import Search from './Search'
import CardCount from './CardCount'
import User from './User'
import Hamburger from './Hamburger'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-teal-800 text-slate-100'>
      <Logo />
      <Search />
      <CardCount />
      <User />
      <Hamburger />
    </div>
  )
}

export default Navbar