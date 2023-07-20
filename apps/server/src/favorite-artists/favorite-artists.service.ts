import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
@Injectable()
export class FavoriteArtistsService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getFavoriteArtists(userId: string): Promise<string[]> {
    const user = await this.userModel
      .findById(userId)
      .populate('favoriteArtists')
      .exec();

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    return user.favoriteArtists;
  }

  async addToFavorites(userId: string, artistId: string): Promise<User> {
    const user = await this.userModel.findById(userId);

    // Verificar si el usuario existe
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    if (user.favoriteArtists.includes(artistId)) {
      throw new Error('El artista ya está en la lista de favoritos');
    }

    user.favoriteArtists.push(artistId);

    await user.save();

    return user;
  }

  async removeFavoriteArtist(userId: string, artistId: string): Promise<User> {
    const user = await this.userModel.findById(userId);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const index = user.favoriteArtists.indexOf(artistId);
    if (index > -1) {
      user.favoriteArtists.splice(index, 1);
    }

    return user.save();
  }
}
