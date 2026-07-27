import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private pets: PetsService) {}

  @Get()
  getAll() {
    return this.pets.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.pets.getById(id);
  }

  @Post()
  create(@Body() dto: CreatePetDto) {
    return this.pets.create(dto, null); // позже добавим userId из JWT
  }
}
