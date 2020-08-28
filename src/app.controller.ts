import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(':code')
  async getNewUrl(@Param('code') urlCode: string, @Res() res) {
    let url = await this.appService.getNewUrl(urlCode);
    return res.redirect(`http://${url}`);
  }
}
