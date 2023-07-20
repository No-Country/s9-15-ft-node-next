import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AmountDto {
  @IsNotEmpty()
  @IsString()
  currency_code: string;

  @IsNotEmpty()
  @IsString()
  value: string;
}

export class paypalItemDto {
  @ValidateNested({ each: true })
  @Type(() => AmountDto)
  items: AmountDto;
}
