'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { initialMessages } from '@/services/utils/data'
import { Message } from '@/services/utils/types'
import MessageBubble from '@/shared/MessageBubble'
import { Loader2, SendHorizontal } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'


const Chat = () => {

  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputVale, setInputValue] = useState('')
  const [isLoading, setISLoading] = useState(false)

  const scrollContainerRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    if(scrollContainerRef.current){
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [messages,isLoading])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if(!inputVale.trim() || isLoading) return

    //guardamos el mensaje del usuario
    const userMessage: Message = {
      id: Date.now(),
      role:'user',
      content: inputVale.trim()
    }

    //se actualiza la pantalla con el mensaje del usuario
    const newMessagesHistory = [...messages, userMessage]
    setMessages(newMessagesHistory)
    setInputValue('')

    setISLoading(true)

    try {
      const response = await fetch('http://localhost:3001/chat', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify({messages: newMessagesHistory}),
      })
      if(!response.ok){
        throw new Error('Error en la comunicación con el servidor')
      }
      const data = await response.json()

      const aiMessage: Message = {
        id: Date.now() + 1,
        role: data.message.role,
        content: data.message.content
      }

      setMessages((prev) => [...prev, aiMessage])

    } catch (error) {
      console.error('Error al enviar el mensaje:', error)
    }finally {
      setISLoading(false)
    }
  }

  return (
    <div className="flex flex-col w-full max-w-[450px] h-[500px] rounded-xl border border-border/50 bg-background/60 backdrop-blur-xl shadow-2xl overflow-hidden">
      
      <div className="flex items-center px-4 py-3 border-b border-border/50 bg-muted/20">
        <div className="flex gap-2">
          <div className="size-3 rounded-full bg-red-500/80"></div>
          <div className="size-3 rounded-full bg-yellow-500/80"></div>
          <div className="size-3 rounded-full bg-primary/80"></div>
        </div>
        <span className="ml-auto mr-auto text-sm font-medium text-muted-foreground">
          Asistente IA
        </span>
        <div className="w-11"></div> 
      </div>

      <div 
        ref={scrollContainerRef}
        className='flex-1 p-4 overflow-y-auto flex flex-col gap-4'
      >
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            role={msg.role as 'user' | 'bot'}
            content={msg.content}
          />
        ))}
        {isLoading &&(
          <div className="flex w-full justify-start">
          <div className="max-w-[80%] p-3 text-sm shadow-sm bg-muted/20 text-foreground border border-border/40 rounded-2xl rounded-tl-none flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-primary" />
            <span>Analizando perfil...</span>
          </div>
        </div>
        )}
      </div>

      <div className="flex-1 p-4 overflow-y-auto"> </div>

      <div className="p-4 border-t border-border/50 bg-muted/10">
        <form className="flex w-full items-center gap-2" onSubmit={handleSendMessage}>
          <Input 
            placeholder="Escribe un mensaje..." 
            className="flex-1 bg-background/50 border-border/50 focus-visible:ring-primary"
            value={inputVale}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button 
            type="submit" 
            size="icon" 
            className="bg-primary text-black hover:bg-primary/80 transition-colors"
            disabled={!inputVale.trim()}
          >
            <SendHorizontal className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Chat