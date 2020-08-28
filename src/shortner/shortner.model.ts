import * as mongoose from 'mongoose';

export const UrlShortnerSchema = new mongoose.Schema({
  url: { type: String, required: true },
  userId: String,
  userTypeId: String,
});
export interface URLShortner extends mongoose.Document {
  id: string;
  url: string;
  userId: string;
  userTypeId: string;
}
