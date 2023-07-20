import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAlbumDto } from 'src/dto/create-album.dto';
import { UpdateAlbumDto } from 'src/dto/update-album.dto';
import { Album } from 'src/schemas/album.schema';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel(Album.name) private albumModel: Model<Album>) {}

  async create(createAlbum: CreateAlbumDto) {
    const newAlbum = new this.albumModel(createAlbum);
    await newAlbum.save();
    return newAlbum;
  }

  async update(id: string, updateAlbum: UpdateAlbumDto) {
    return await this.albumModel.findByIdAndUpdate(id, updateAlbum);
  }

  async findAll() {
    return await this.albumModel.find();
  }

  async delete(id: string) {
    return await this.albumModel.findByIdAndDelete(id);
  }

  async findByName(nombre: string) {
    return await this.albumModel.findOne({ nombre });
  }

  async findByArtist(usuario: string) {
    return await this.albumModel.findOne({ usuario });
  }
}
