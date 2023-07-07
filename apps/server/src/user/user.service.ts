import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { UpdateUserDto } from '../dto/update-user.dto';
import { PaginationQueryDto } from 'src/dto/pagination-query.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getAll(): Promise<User[] | null> {
    return this.userModel.find().exec();
  }

  async getAllArtist({
    limit,
    offset,
  }: PaginationQueryDto): Promise<User[] | null> {
    return this.userModel.find().skip(offset).limit(limit).exec();
  }

  async getById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async deleteById(id: string): Promise<User | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async updateById(
    id: string,
    updatedUserData: UpdateUserDto,
  ): Promise<User | null> {
    return this.userModel
      .findByIdAndUpdate(id, updatedUserData, { new: true })
      .exec();
  }
}
