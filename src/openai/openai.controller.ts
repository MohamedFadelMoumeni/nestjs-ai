import { Controller, Post , Body} from '@nestjs/common';
import { CreateChatRequest } from './dtos/create-chat.dto';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
    constructor(
        private readonly openaiService : OpenaiService
    ){}
    @Post("chatCompletion")
    async createChatCompletion(
        @Body() body : CreateChatRequest
    ){
        return this.openaiService.completeChatCompletion(body.messages)
    }
}
