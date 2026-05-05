import { MessageBubbleProps } from '@/services/utils/types'
import { Bot, User } from 'lucide-react'
import React from 'react'

const MessageBubble = ({role, content}: MessageBubbleProps) => {
    const isUser = role === 'user'

    return (
        <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center mr-2 border border-border/50">
                    <Bot size={16} className="text-primary" />
                </div>
            )}
    
            <div 
                className={`max-w-[80%] p-3 text-sm shadow-sm ${
                    isUser 
                    ? 'bg-primary text-black rounded-2xl rounded-tr-none font-medium' 
                    : 'bg-muted/20 text-foreground border border-border/40 rounded-2xl rounded-tl-none'
                }`}
            >
            {content}
            </div>
    
            {isUser && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-2">
                    <User size={16} className="text-black" />
                </div>
            )}
        </div>
    )
}

export default MessageBubble
