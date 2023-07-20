import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { PlaylistService } from './playlist.service';

@Controller('playlist')
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}

  @Get()
  findAll() {
    return this.playlistService.findAllPlaylist();
  }

  @Get(':id')
  async finOne(@Param('id') id: string) {
    const playlist = this.playlistService.findOnePlaylist(id);
    if (!playlist) throw new NotFoundException('Playlist does not exist');
    return playlist;
  }

  @Post()
  create(@Body() body: any) {
    try {
      return this.playlistService.createPlaylist(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Playlist already exist');
      }
      throw error;
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const playlist = this.playlistService.deletePlaylist(id);
    if (!playlist) throw new NotFoundException('Playlist does not exist');
  }
}
