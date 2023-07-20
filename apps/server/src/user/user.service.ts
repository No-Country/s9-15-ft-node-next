import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationQueryDto } from 'src/dto/pagination-query.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly configService: ConfigService,
  ) {}
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

  async updateProfilePhotoUrl(
    id: string,
    profilePhotoUrl: string,
  ): Promise<User | null> {
    return this.userModel
      .findByIdAndUpdate(id, { profilePhotoUrl }, { new: true })
      .exec();
  }
}
