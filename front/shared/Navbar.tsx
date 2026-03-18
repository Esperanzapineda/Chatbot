'use client'
import { Menubar,MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <Menubar className='h-20 rounded-none '>
        <MenubarMenu >
          <MenubarTrigger className='bg-primary text-background w-8 h-8 m-4 text-3xl font-bold '>
            E
          </MenubarTrigger>
          <MenubarTrigger className='text-3xl font-bold'>
            Esperanza
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}

export default Navbar
