import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Song } from 'src/schemas/song.schema';
import mongoose, { Model } from 'mongoose';
import { CreateSongDto } from 'src/dto/create-song.dto';
import { UpdateSongDto } from 'src/dto/update-songs';
import { PaginationQueryDto } from 'src/dto/pagination-query.dto';
import { off } from 'process';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.name) private songModel: Model<Song>) {}

  async getAllSongs({ limit, offset }: PaginationQueryDto): Promise<Song[]> {
    return this.songModel.find().skip(offset).limit(limit).exec();
  }

  async createSong(createSong: CreateSongDto): Promise<Song | null> {
    const newSong = new this.songModel(createSong);
    try {
      await newSong.save();
    } catch (error) {
      console.log(error);
    }
    return newSong;
  }

  async updateSong(id: number, song: UpdateSongDto) {
    return this.songModel.findByIdAndUpdate(id, song);
  }

  async deleteSong(id: number) {
    try {
      const objectId = new mongoose.Types.ObjectId(id);
      return this.songModel.deleteOne({ _id: objectId });
    } catch (error) {
      console.log(error);
    }
  }
}
