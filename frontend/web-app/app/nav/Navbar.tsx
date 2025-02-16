'use client'
import React from 'react'
import { IoCarSportOutline } from 'react-icons/io5'
import Search from './Search'

export default function Navbar() {
  console.log('Client component')  
  return (
    <header className='sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800
    shadow-md'>
        <div className='flex items-center gap-2 text-3xl font-semibold text-red-500'>
            <IoCarSportOutline size={34} />
            <div>AWAP (Auction Web App)</div>
        </div>
        <Search />
        <div>Login</div>
    </header>
  )
}
