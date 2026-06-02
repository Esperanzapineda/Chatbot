import { Message } from "./types";

export const initialMessages: Message[] = [
    { 
        id: 1, 
        role: 'bot', 
        content: '¡Hola! Soy ESPERANZA, la asistente virtual. ¿Qué te gustaría saber sobre mi experiencia como desarrolladora Fullstack?' 
    },
    { 
        id: 2, 
        role: 'user', 
        content: '¿Qué tecnologías dominas para el desarrollo del Backend?' 
    },
    { 
        id: 3, 
        role: 'bot', 
        content: 'Tengo experiencia construyendo APIs robustas utilizando Node.js y Express. También manejo bases de datos relacionales con PostgreSQL y ORMs como Prisma.' 
    }
  ]