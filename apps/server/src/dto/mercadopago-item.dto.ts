import { IsArray, IsNumber, IsString } from 'class-validator';

export class mercadoItemDto {
  @IsString()
  title: string;

  @IsNumber()
  unit_price: number;

  @IsNumber()
  quantity: number;
}
