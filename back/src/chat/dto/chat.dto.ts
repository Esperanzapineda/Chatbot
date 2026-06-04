export interface ChatMessageDto {
  id?: string | number;
  role: 'user' | 'assistant' | 'system';
  content: string;
}