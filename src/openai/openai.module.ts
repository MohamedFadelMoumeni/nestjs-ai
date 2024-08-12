import { Module } from '@nestjs/common';
import { OpenaiController } from './openai.controller';
import { OpenaiService } from './openai.service';
import Groq from 'groq-sdk';

@Module({
  controllers: [OpenaiController],
  providers: [
    OpenaiService,
    {
      provide: Groq,
      useValue: new Groq({apiKey : 'api-key'})
    }
  ]
})
export class OpenaiModule {}
