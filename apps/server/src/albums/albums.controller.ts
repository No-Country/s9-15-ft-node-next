import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from 'src/dto/create-album.dto';
import { UpdateAlbumDto } from 'src/dto/update-album.dto';

@Controller('albums')
export class AlbumsController {
  constructor(private albumService: AlbumsService) {}

  @Get()
  async findAll(@Res() res) {
    try {
      const albums = await this.albumService.findAll();
      if (!albums) {
        return res
          .sendStatus(HttpStatus.NOT_FOUND)
          .json({ message: 'No se ha encontrado ningun album' });
      }
      return res.status(HttpStatus.OK).json(albums);
    } catch (error) {
      return res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  //  /albums/20
  @Get(':nombre')
  async findOne(@Param('nombre') nombre: string, @Res() res) {
    try {
      const albums = await this.albumService.findByName(nombre);
      if (!albums) {
        return res.status(HttpStatus.NOT_FOUND).json({
          message: 'No se ha encontrado ningún álbum con ese nombre',
        });
      }
      return res.status(HttpStatus.OK).json(albums);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  }

  @Get('byArtist/:id')
  async findByArtist(@Param('id') id: string, @Res() res) {
    try {
      const albums = await this.albumService.findByArtist(id);
      if (!albums) {
        return res.sendStatus(HttpStatus.NOT_FOUND).json({
          message: 'No se han encontrado albumes a nombre de este artista',
        });
      }
      res.status(HttpStatus.OK).json(albums);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  }

  @Post()
  async create(@Body() body: CreateAlbumDto, @Res() res) {
    try {
      const album = await this.albumService.create(body);
      if (!album) {
        return res.sendStatus(HttpStatus.BAD_REQUEST);
      }
      return res.status(HttpStatus.OK).json(album);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateAlbumDto,
    @Res() res,
  ) {
    try {
      const album = await this.albumService.update(id, body);
      if (!album) {
        return res.sendStatus(HttpStatus.NOT_FOUND);
      }
      return res.status(HttpStatus.OK).json(album);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res) {
    try {
      const album = await this.albumService.delete(id);
      if (!album) {
        return res.sendStatus(HttpStatus.NOT_FOUND);
      }
      return res.status(HttpStatus.NO_CONTENT);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  }
}
