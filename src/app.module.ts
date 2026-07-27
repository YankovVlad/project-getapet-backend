import { Module } from '@nestjs/common';
import { PetsModule } from './modules/pets/pets.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, ignoreEnvFile: process.env.NODE_ENV === 'production', }),PrismaModule, PetsModule],
})
export class AppModule {}

