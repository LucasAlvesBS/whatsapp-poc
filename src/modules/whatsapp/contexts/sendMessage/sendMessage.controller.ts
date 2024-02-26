import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SendMessageToWhatsappService } from './sendMessage.service';
import { SendMessageRequestDTO } from './dtos/sendMessageRequest.dto';
import { Request } from 'express';

@Controller('whatsapp')
export class SendMessageToWhatsappController {
  constructor(private service: SendMessageToWhatsappService) {}

  @ApiTags('whatsapp')
  @ApiOperation({
    summary: 'Send message to WhatsApp',
  })
  @ApiNoContentResponse({
    description: 'Message sent successfully',
  })
  @ApiBearerAuth('Bearer')
  @HttpCode(HttpStatus.OK)
  @Post()
  public execute(
    @Body() body: SendMessageRequestDTO,
    @Req() request: Request,
  ): Promise<void> {
    return this.service.execute(body, request.headers.authorization);
  }
}
