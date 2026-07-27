import { IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

export class CreatePetDto {
  @IsString()
  name: string;

  @IsString()
  type: string; // dog, cat, etc

  @IsOptional()
  @IsString()
  breed?: string;

  @IsInt()
  @Min(0)
  @Max(40)
  age: number;

  @IsString()
  gender: string; // male / female

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsString()
  city: string;

  @IsString()
  county: string;

  @IsInt()
  @Min(0)
  price: number;

  @IsString()
  currency: string;
}
