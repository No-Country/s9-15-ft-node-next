import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Playlist, PlaylistDocument } from 'src/schemas/playlist.schema';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectModel(Playlist.name) private playlistModel: Model<Playlist>,
  ) {}

  async findAll() {
    return this.playlistModel.find();
  }

  async create(createPlaylist: PlaylistDocument) {
    const newPlaylist = await this.playlistModel.create(createPlaylist);
    return newPlaylist;
  }

  async findOne(id: string) {
    return this.playlistModel.findById(id).exec();
  }

  async delete(id: string) {
    return this.playlistModel.findByIdAndDelete(id);
  }
}
