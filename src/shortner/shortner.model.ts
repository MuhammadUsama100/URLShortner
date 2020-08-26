import * as mongoose from 'mongoose';

export const UrlShortnerSchema = new mongoose.Schema({
  url: { type: String, required: true },
  shorterUrl: String,
  userId: String,
  userTypeId: String,
});
export interface URLShortner {
  id: string;
  url: string;
  shorterUrl: string;
  userId: string;
  userTypeId: string;
}
