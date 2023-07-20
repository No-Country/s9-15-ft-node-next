import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nombre del Usuario',
    example: 'Juan',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    description: 'Apellido del usuario',
    example: 'faino',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  surname: string;
  @ApiProperty({
    description: 'Nombre de Usuario',
    example: 'Juan21',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  username: string;
  @ApiProperty({
    description: 'Responde a si el usuario es artista o no',
    example: true,
    required: false,
  })
  @IsBoolean()
  artist: boolean;
  @ApiProperty({
    description: 'Email del usuario',
    example: 'pedro@123.com',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'passwordD1!',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial.',
    },
  )
  password: string;
}
