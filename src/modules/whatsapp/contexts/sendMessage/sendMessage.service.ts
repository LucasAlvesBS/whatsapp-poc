import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { SendMessageRequestDTO } from './dtos/sendMessageRequest.dto';
import { firstValueFrom } from 'rxjs';
import env from '@config/env';

@Injectable()
export class SendMessageToWhatsappService {
  constructor(private httpService: HttpService) {}
  public async execute(
    body: SendMessageRequestDTO,
    bearerToken: string,
  ): Promise<void> {
    try {
      await firstValueFrom(
        this.httpService.post(env().whatsapp.baseUrl, body, {
          headers: { Authorization: bearerToken },
        }),
      );
    } catch (error) {
      throw error;
    }
  }
}
