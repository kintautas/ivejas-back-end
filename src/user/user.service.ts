import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface'
import { CreateUserDto } from './dtos/create-user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id):Promise<User> {
      return await this.userModel.findOne().exec();
  }

  async update(id: string, model: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, model);
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.userModel.findOneAndDelete(id);
      return true;
    } catch (e) {
      return e;
    }
  }


}
