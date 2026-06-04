import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatMessageDto } from './dto/chat.dto';

//ruta http://localhost:3001/chat
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async handleChat(@Body('messages') messages: ChatMessageDto[]) {
    //se recibe el arreglo de 'messages' del front y lo enviamos al servidor
    const aiResponse = await this.chatService.processChat(messages);

    //se devuelve la respuesta empaquetada
    return {
      message: aiResponse,
    };
  }
}
