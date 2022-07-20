import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CreateSectionModule } from './create-section/create-section.module';
import { CoffeeModule } from './coffee/coffee.module';
import { FetchSectionModule } from './fetch-section/fetch-section.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    CreateSectionModule,
    CoffeeModule,
    FetchSectionModule,
  ],
})
export class AppModule {}
