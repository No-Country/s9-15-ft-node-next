import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PlaylistService } from './playlist.service';

@Controller('playlist')
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}

  @Get()
  findAll() {
    return this.playlistService.findAll();
  }

  @Get(':id')
  async finOne(@Param('id') id: string) {
    const playlist = this.playlistService.findOne(id);
    if (!playlist) throw new NotFoundException('Playlist does not exist');
    return playlist;
  }

  @Post()
  create(@Body() body: any) {
    try {
      return this.playlistService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Playlist already exist');
      }
      throw error;
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const playlist = this.playlistService.delete(id);
    if (!playlist) throw new NotFoundException('Playlist does not exist');
  }
}
