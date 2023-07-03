import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import {CreateUserDto} from '../dto/create-user.dto'

@Injectable()
export class AuthJwtService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

 

  async createUser(createData: CreateUserDto): Promise<User | null> {
    const newUser = new this.userModel(createData)
    await newUser.save()
    return newUser
  }

}