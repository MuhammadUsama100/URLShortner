import * as mongoose from 'mongoose';

import { IsEmail, IsNotEmpty } from 'class-validator';
export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  passward: { type: String, required: true },
  userTypeId: String,
});

export interface UserDetails extends mongoose.Document {
  email: string;
  fullName: string;
  passward: string;
  userTypeId: string;
}

export class UserRequest {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  fullName: string;
  @IsNotEmpty()
  passward: string;
  userTypeId: string;
}
