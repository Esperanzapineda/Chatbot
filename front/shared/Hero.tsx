import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Hero = () => {
  return (
    <Card  className="w-full bg-background">
      <CardHeader >
        <CardTitle className='text-foreground'>
            Conoce a ESPERANZA:
        </CardTitle>
        <CardDescription className='text-primary'>
            Mi Asistente de IA te Cuenta sobre mi experiencia
        </CardDescription>
      </CardHeader>
      <CardFooter className='grid gap-2 bg-background border-none'>
        <Button type='submit' className='w-full text-foreground font-bold px-4 py-2 rounded-md hover:bg-primary/90 transition-all cursor-pointer'>
            Chatear con ESPERANZA
        </Button>
        <Button variant='outline' className='w-full text-foreground hover:text-primary'>
            Ver Demo
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Hero
