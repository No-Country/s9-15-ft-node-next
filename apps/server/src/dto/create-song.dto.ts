import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateSongDto {
  @IsString()
  name: string;

  @IsNumber()
  duration: number;

  @IsString()
  user: string;

  @IsOptional()
  @IsString()
  coArtist: string;

  @IsNumber()
  price: number;

  @IsString()
  genre: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsString()
  date: string;

  @IsOptional()
  @IsString()
  album: string;
}
