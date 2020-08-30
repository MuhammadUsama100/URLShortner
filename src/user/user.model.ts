import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  passward: { type: String, required: true },
  userTypeId: String,
});

export interface user extends mongoose.Document {
  email: string;
  fullName: string;
  passward: string;
  userTypeId: string;
}
