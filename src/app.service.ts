import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { URLShortner } from './shortner/shortner.model';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('urlShortner') private readonly urlModel: Model<URLShortner>,
  ) {}
  getHello(): string {
    return 'Hello usama!';
  }
  async getNewUrl(urlShortnerId: string) {
    try {
      var url = await this.urlModel.findOne({ urlCode: urlShortnerId });
      let oldUrl = url.url;
      return oldUrl;
    } catch (e) {
      throw new NotFoundException('Url Not Found');
    }
  }
}
