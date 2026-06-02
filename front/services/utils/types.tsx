export interface MessageBubbleProps {
    role: 'user' | 'bot'
    content: string
}

export interface Message {
    id: string | number
    role: 'user' | 'bot'
    content: string
}