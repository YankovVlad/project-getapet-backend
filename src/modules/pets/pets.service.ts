import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.pet.findMany();
  }

  getById(id: string) {
    return this.prisma.pet.findUnique({ where: { id } });
  }

  create(dto: CreatePetDto, userId: string | null) {
    return this.prisma.pet.create({
      data: { ...dto, ownerId: userId },
    });
  }

  update(id: string, dto: UpdatePetDto) {
    return this.prisma.pet.update({
      where: { id },
      data: dto,
    });
  }

  delete(id: string) {
    return this.prisma.pet.delete({ where: { id } });
  }
}
