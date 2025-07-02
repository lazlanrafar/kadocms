import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LinksModule } from './links/links.module';
import { AuthModule } from './auth/auth.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    LinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}