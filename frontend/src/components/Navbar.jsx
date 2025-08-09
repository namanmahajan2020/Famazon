import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-56' alt='logo' />

      <ul className='hidden sm:flex gap-5 text-base text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden' />
        </NavLink>

      </ul>
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5.5 cursor-pointer' alt="search_icon" />
        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5.5 cursor-pointer' alt="profile_icon" />

        </div>
      </div>
    </div>
  )
}

export default Navbar
