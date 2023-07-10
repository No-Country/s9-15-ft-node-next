import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  Param,
  UploadedFile,
  UseInterceptors,
  Req,
  Delete,
  Put,
  Get,
  Query,
  Search,
} from '@nestjs/common';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/dto/pagination-query.dto';
import { GetArtirtsFilterDto } from 'src/dto/get-artists-filter.dto';
import { SongsService } from 'src/songs/songs.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

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

  @Get('/search')
  async getAllArtits(
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
}
