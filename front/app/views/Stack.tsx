'use client'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CodeXml, Database, TrendingUp } from 'lucide-react'
import React from 'react'

const Stack = () => {
  return (
    <section className='w-full py-12 px-4 md:py-20'>
      <div className='flex flex-col items-center mb-12 space-y-4'>
        <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-center'>
          Mi <span className='text-primary'>Stack</span> Tecnológico
        </h2>
        <p className='text-muted-foreground text-center max-w-2xl text-balance'>
          No es una respuesta genérica. Mi IA entiende los matices de cada industria 
          y adapta su base de conocimiento para impresionar al cliente ideal.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        
        <Card className='group transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-muted bg-zinc-900'>
          <CardHeader>
            <div className='mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
              <CodeXml size={24} />
            </div>
            <CardTitle className='text-xl text-foreground'>Frontend & UI</CardTitle>
            <CardDescription className='leading-relaxed text-balance'>
              Dominio de Next.js, React, TypeScript y Shadcn UI para crear experiencias web modernas, accesibles y eficientes.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className='group transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-muted bg-zinc-900'>
          <CardHeader>
            <div className='mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
              <Database size={24} />
            </div>
            <CardTitle className='text-xl text-foreground'>Backend & Data</CardTitle>
            <CardDescription className='leading-relaxed text-balance'>
              Experiencia con Node.js, Express y bases de datos NoSQL y SQL para arquitecturas robustas, seguras y escalables.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className='group transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-muted bg-zinc-900'>
          <CardHeader>
            <div className='mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
              <TrendingUp size={24} />
            </div>
            <CardTitle className='text-xl text-foreground'>Proyectos Destacados</CardTitle>
            <CardDescription className='leading-relaxed text-balance'>
              Portafolio en crecimiento que incluye sistemas de gestión de tareas, APIs de E-commerce y agentes inteligentes.
            </CardDescription>
          </CardHeader>
        </Card>

      </div>
    </section>
  )
}

export default Stack
