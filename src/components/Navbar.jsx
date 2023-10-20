"use client"

import { links } from '@/data/data'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import {BsSun,BsMoon} from 'react-icons/bs'

const Navbar = () => {
    
    const {theme,setTheme}=useTheme()
    const path=usePathname()
    // console.log(path)
    const handleTheme=()=>{
        if(theme==="light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }

  return (
    <div className='p-4 py-4 max-w-7xl mx-auto flex items-center justify-between'>
       <div className='flex-1'>
        <Image className="h-8 w-28" src="/logo.png" alt="logo" height={100} width={200}/>
       </div>
       <div className='flex-1 flex items-center justify-center space-x-2 md:space-x-4'>
         {links.map((link,index)=>(
            <Link className={path===`${link.href}`?"font-bold text-blue-500":""} key={index} href={link.href}>{link.label}</Link>
         ))}
       </div>
       <div className='flex-1 flex justify-end'>
       {theme==="light"? <p onClick={handleTheme} className='text-xl font-bold cursor-pointer'><BsSun/></p> :
       <p onClick={handleTheme} className='text-xl font-bold cursor-pointer'><BsMoon/></p>
       }
       </div>
    </div>
  )
}

export default Navbar