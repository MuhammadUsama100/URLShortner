import {
  Get,
  Body,
  Param,
  Patch,
  Delete,
  Controller,
  Post,
  Put,
} from '@nestjs/common';
import { ShortnerService } from './shortner.service';

@Controller('url')
export class ShorterUrlController {
  constructor(private readonly urlService: ShortnerService) {}

  // Post New Url in db
  @Post()
  async addUrl(
    @Body('url') url: string,
    @Body('userId') userId: string,
    @Body('userTypeId') userTypeId: string,
  ) {
    const newUrl = await this.urlService.insertUrl(url, userId, userTypeId);
    return { newCreatedUrl: newUrl };
  }
  @Put(':id')
  async updateUrl(
    @Param('id') urlShortnerId: string,
    @Body('url') url: string,
    @Body('userId') userId: string,
    @Body('userTypeId') userTypeId: string,
  ) {
    let updatedUrl = await this.urlService.updateUrl(
      urlShortnerId,
      url,
      userId,
      userTypeId,
    );
    return updatedUrl;
  }
  // @Get()
  // async getAllUrl() {
  //   let urls = await this.urlService.getAllUrl();
  //   return urls;
  // }
  @Delete(':id')
  async deleteUrlById(@Param('id') urlShortnerId: string) {
    let msg = await this.urlService.deleteUrl(urlShortnerId);
    return msg;
  }
}
