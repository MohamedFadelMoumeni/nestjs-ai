import {IsArray, IsNotEmpty, IsString, ValidateNested} from 'class-validator'
import {Type} from 'class-transformer'


export class CreateChatRequest {

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => CreateChatMessagesDto)
    messages: CreateChatMessagesDto[]

}


export class CreateChatMessagesDto {
    @IsString()
    @IsNotEmpty()
    role : string;

    @IsString()
    @IsNotEmpty()
    content : string;
}