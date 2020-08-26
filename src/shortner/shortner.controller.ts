import {
  Get,
  Body,
  Param,
  Patch,
  Delete,
  Controller,
  Post,
} from '@nestjs/common';
import { ShortnerService } from './shortner.service';

@Controller('url')
export class ShorterUrlController {
  constructor(private readonly urlService: ShortnerService) {}

  // Post New Url in db
  @Post()
  async addProduct(
    @Body('url') url: string,
    @Body('shorterUrl') shorterUrl: string,
    @Body('userId') userId: string,
    @Body('userTypeId') userTypeId: string,
  ) {
    const newUrl = await this.urlService.insertProduct(
      url,
      shorterUrl,
      userId,
      userTypeId,
    );
    return { newCreatedUrl: newUrl };
  }
}
