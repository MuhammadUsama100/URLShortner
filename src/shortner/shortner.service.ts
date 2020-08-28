import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { URLShortner } from './shortner.model';
import * as shorturl from 'shortid';
@Injectable()
export class ShortnerService {
  constructor(
    @InjectModel('urlShortner') private readonly urlModel: Model<URLShortner>,
  ) {}
  async insertUrl(
    url: string,

    userId: string,
    userTypeId: string,
  ) {
    let newUrlCode = shorturl.generate();
    const newUrl = new this.urlModel({
      url,
      userId,
      urlCode: newUrlCode,
      userTypeId,
    });
    const urlVal = await newUrl.save();
    return urlVal;
  }
  async updateUrl(
    urlShortnerId: string,
    url: string,
    userId: string,
    userTypeId: string,
  ) {
    const urlShortner = await this.findUrl(urlShortnerId);
    if (url) {
      urlShortner.url = url;
    }
    if (userId) {
      urlShortner.userId = userId;
    }
    if (userTypeId) {
      urlShortner.userTypeId = userTypeId;
    }
    let updatedUrl = await urlShortner.save();
    return updatedUrl;
  }

  private async findUrl(id: string): Promise<URLShortner> {
    let url;
    try {
      url = await this.urlModel.findById(id);
    } catch (e) {
      throw new NotFoundException('Could not Find url');
    }
    if (!url) {
      throw new NotFoundException('url not not found');
    }
    return url;
  }
  async getAllUrl() {
    let url = await this.urlModel.find();
    return url;
  }
  async deleteUrl(urlShortnerId: string) {
    try {
      await this.urlModel.deleteOne({ _id: urlShortnerId });
      return { msg: 'Url Deleted Successfully', status: true };
    } catch (e) {
      throw new NotFoundException('url not found');
    }
  }
}
