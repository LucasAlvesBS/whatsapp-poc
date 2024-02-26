import { Module } from '@nestjs/common';
import { SendMessageToWhatsappController } from './contexts/sendMessage/sendMessage.controller';
import { SendMessageToWhatsappService } from './contexts/sendMessage/sendMessage.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SendMessageToWhatsappController],
  providers: [SendMessageToWhatsappService],
})
export class WhatsappModule {}
