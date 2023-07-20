import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateTestDto {
  @IsString()
  name: string;

  @IsString()
  lastname: string;
}
