import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDetails } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDetails>,
  ) {}
  async insertUser(
    fullName: string,
    email: string,
    passward: string,
    userTypeId: string,
  ) {
    const newUser = new this.userModel({
      email,
      fullName,
      passward,
      userTypeId,
    });
    const createduser = await newUser.save();
    return createduser;
  }
}
