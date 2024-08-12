import { Injectable } from '@nestjs/common';
import Groq from 'groq-sdk';
import { CreateChatMessagesDto } from './dtos/create-chat.dto';

@Injectable()
export class OpenaiService {
    constructor(private readonly openai: Groq) {}

    async completeChatCompletion(messages : CreateChatMessagesDto[]){
        return this.openai.chat.completions.create(
            {
                messages : messages as Groq.Chat.ChatCompletionMessageParam[] ,
                model : "llama3-70b-8192"
            }
        )
    }
}
