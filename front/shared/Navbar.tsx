'use client'
import { Menubar,MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <Menubar className='h-20 rounded-none border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-8 flex justify-between'>
        <MenubarMenu >
          <div className="flex items-center gap-3">
            <div className='bg-[#13EC5B] text-black w-10 h-10 flex items-center justify-center rounded-lg text-2xl font-black shadow-[0_0_15px_rgba(19,236,91,0.3)]'>
              E
            </div>
            <span className='text-xl font-bold tracking-tight'>
              Esperanza
            </span>
          </div>
        </MenubarMenu>
        <div className="flex items-center gap-2">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer hover:text-primary transition-colors">
              <Link href="#sobre-mi">Sobre mí</Link>
            </MenubarTrigger>
          </MenubarMenu>
          
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer hover:text-primary transition-colors">
              <Link href="#proyectos">Proyectos</Link>
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="bg-primary text-black font-bold px-4 py-2 rounded-md hover:bg-primary/90 transition-all cursor-pointer">
              <Link href="#contacto">Contacto</Link>
            </MenubarTrigger>
          </MenubarMenu>
        </div>
      </Menubar>
    </header>
  )
}

export default Navbar
