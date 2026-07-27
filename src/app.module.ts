import { Module } from '@nestjs/common';
import { PetsModule } from './modules/pets/pets.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),PrismaModule, PetsModule],
})
export class AppModule {}

