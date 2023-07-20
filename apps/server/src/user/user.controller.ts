import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { v2 as cloudinary } from 'cloudinary';
import { diskStorage } from 'multer';
import { GetArtirtsFilterDto } from 'src/dto/get-artists-filter.dto';
import { PaginationQueryDto } from 'src/dto/pagination-query.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { SongsService } from 'src/songs/songs.service';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly songService: SongsService,
    private readonly configService: ConfigService,
  ) {
    cloudinary.config({
      cloud_name: this.configService.get<string>('cloudinary.cloudName'),
      api_key: this.configService.get<string>('cloudinary.apiKey'),
      api_secret: this.configService.get<string>('cloudinary.apiSecret'),
    });
  }

  @ApiOperation({ summary: 'Obtener todos los usuarios.' })
  @Get()
  async getAll(@Res() res) {
    try {
      const users = await this.userService.getAll();
      return res.status(HttpStatus.OK).json(users);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }

  @ApiOperation({ summary: 'Busqueda personal de artistas y musica' })
  @ApiParam({ name: 'id', description: 'ID del user' })
  @Get('/mysongs/:id')
  async getMyMusic(
    @Param('id') id: string,
    @Query() pagination: PaginationQueryDto,
    @Query() { search }: GetArtirtsFilterDto,
    @Res() res,
  ) {
    try {
      const user = await this.userService.getById(id);
      const songsId = user.songsPurchased;
      let songs = await this.songService.findSongsByIds(songsId, pagination);
      if (search) {
        const searchLowerCase = search.toLowerCase();
        songs = songs.filter((song) =>
          song.name.toLowerCase().includes(searchLowerCase),
        );
      }
      return res.status(HttpStatus.OK).json({ songs });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: `Error en el servidor, error:${error}` });
    }
  }

  @ApiOperation({ summary: 'Busqueda de artistas y canciones' })
  @Get('/search')
  async getSearch(
    @Query() pagination: PaginationQueryDto,
    @Query() { search }: GetArtirtsFilterDto,
    @Res() res,
  ) {
    try {
      const users = await this.userService.getAllArtist(pagination);
      let songs = await this.songService.getAllSongs(pagination);
      let artistUsers = users.filter((user) => user.artist === true);
      if (search) {
        const searchLowerCase = search.toLowerCase();
        (artistUsers = artistUsers.filter((artist) =>
          artist.name.toLowerCase().includes(searchLowerCase),
        )),
          (songs = songs.filter((song) =>
            song.name.toLowerCase().includes(searchLowerCase),
          ));
      }
      return res.status(HttpStatus.OK).json({ ...songs, ...artistUsers });
    } catch (error) {
      console.log(error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }

  @ApiOperation({ summary: 'Busqueda de artistas y canciones' })
  @Get('/artists')
  async getArtists(
    @Query() pagination: PaginationQueryDto,
    @Query() { search }: GetArtirtsFilterDto,
    @Res() res,
  ) {
    try {
      const users = await this.userService.getAllArtist(pagination);
      let artistUsers = users.filter((user) => user.artist === true);
      if (search) {
        const searchLowerCase = search.toLowerCase();
        artistUsers = artistUsers.filter((artist) =>
          artist.name.toLowerCase().includes(searchLowerCase),
        );
      }
      return res.status(HttpStatus.OK).json({ ...artistUsers });
    } catch (error) {
      console.log(error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }

  @ApiParam({ name: 'id', description: 'ID del user' })
  @ApiOperation({ summary: 'Obtener un usuario por su id' })
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res) {
    try {
      const user = await this.userService.getById(id);
      if (!user) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'User not found' });
      }
      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }

  @ApiParam({ name: 'id', description: 'ID del user a eliminar' })
  @ApiOperation({ summary: 'Borrar un usuario por su id' })
  @Delete(':id')
  async deleteById(@Param('id') id: string, @Res() res) {
    try {
      const deletedUser = await this.userService.deleteById(id);
      if (!deletedUser) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'User not found' });
      }
      return res.status(HttpStatus.OK).json(deletedUser);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }

  @ApiParam({ name: 'id', description: 'ID del user a actualizar' })
  @ApiOperation({ summary: 'Actualizar un usuario por su id' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res,
  ) {
    try {
      const updatedUser = await this.userService.updateById(id, updateUserDto);
      if (!updatedUser) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'User not found' });
      }
      return res.status(HttpStatus.OK).json(updatedUser);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }

  @Post(':id/profile-photo')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // Directorio de destino para guardar los archivos
        filename: (req, file, cb) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(
            Math.random() * 1e9,
          )}`;
          cb(null, `${file.fieldname}-${uniqueSuffix}`);
        },
      }),
    }),
  )
  async uploadProfilePhoto(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Res() res,
  ) {
    try {
      const result = await cloudinary.uploader.upload(file.path);
      const profilePhotoUrl = result.secure_url;

      const updatedUser = await this.userService.updateProfilePhotoUrl(
        id,
        profilePhotoUrl,
      );

      if (!updatedUser) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'User not found' });
      }

      return res.status(HttpStatus.OK).json(updatedUser);
    } catch (error) {
      console.error(error);
      throw new Error('Error uploading profile photo');
    }
  }

  @Get('/addsong/:id')
  async addSong(
    @Param('id') id: string,
    @Body('userId') userId: string,
    @Res() res,
  ) {
    try {
      const song = await this.songService.getById(id);
      if (!song) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: `La canción con id:${id} no existe` });
      }
      const user = await this.userService.getById(userId);
      if (!user) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: `El user con id:${userId} no existe` });
      }
      user.songsPurchased.push(song);
      const userUpdate = await this.userService.updateById(userId, user);
      return res.status(HttpStatus.OK).json({
        userUpdate,
        song,
        message: `La canción con id:${id} ha sido agregada a las canciones del usuario.`,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
