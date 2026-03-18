import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="flex p-10 border "> 
                <div>
                    <h1 className='bg-primary text-background w-8 h-8 m-4 text-3xl font-bold text-center rounded'>
                        E
                    </h1>
                </div>

                <div className='flex m-5 gap-6'>
                    <span className="">Sobre mi</span> 
                    <span >GitHub</span> 
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
