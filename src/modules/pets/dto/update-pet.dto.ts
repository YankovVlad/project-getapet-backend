import { IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

export class UpdatePetDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  breed?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(40)
  age?: number;

  @IsOptional()
  @IsString()
  gender?: string;

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

  @IsString()
  status: string;
}
