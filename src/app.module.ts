import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { WhatsappModule } from 'modules/whatsapp/whatsapp.module';
import configuration from '@config/env';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    HealthModule,
    WhatsappModule,
  ],
})
export class AppModule {}
