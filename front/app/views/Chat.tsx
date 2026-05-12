'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { mockMessages } from '@/services/utils/data'
import MessageBubble from '@/shared/MessageBubble'
import { SendHorizontal } from 'lucide-react'
import React from 'react'


const Chat = () => {
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

      <div className='flex-1 p-4 overflow-y-auto flex flex-col gap-4'>
        {mockMessages.map((msg) => (
          <MessageBubble
            key={msg.id}
            role={msg.role as 'user' | 'bot'}
            content={msg.content}
          />
        ))}
      </div>

      <div className="flex-1 p-4 overflow-y-auto"> </div>

      <div className="p-4 border-t border-border/50 bg-muted/10">
        <form className="flex w-full items-center gap-2" onSubmit={(e) => e.preventDefault()}>
          <Input 
            placeholder="Escribe un mensaje..." 
            className="flex-1 bg-background/50 border-border/50 focus-visible:ring-primary"
          />
          <Button 
            type="submit" 
            size="icon" 
            className="bg-primary text-black hover:bg-primary/80 transition-colors"
          >
            <SendHorizontal className="w-5 h-5" />
          </Button>
        </form>
      </div>

    </div>
  )
}

export default Chat