import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { URLShortner } from './shortner.model';

@Injectable()
export class ShortnerService {
  constructor(
    @InjectModel('urlShortner') private readonly urlModel: Model<URLShortner>,
  ) {}
  async insertProduct(
    url: string,
    shorterUrl: string,
    userId: string,
    userTypeId: string,
  ) {
    const newUrl = new this.urlModel({
      url,
      shorterUrl,
      userId,
      userTypeId,
    });
    const urlVal = await newUrl.save();
    return urlVal;
  }
}
