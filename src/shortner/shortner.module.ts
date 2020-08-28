import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ShortnerService } from './shortner.service';
import { UrlShortnerSchema } from './shortner.model';
import { ShorterUrlController } from './shortner.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'urlShortner', schema: UrlShortnerSchema },
    ]),
  ],
  controllers: [ShorterUrlController],
  providers: [ShortnerService],
})
export class ShortnerModule {}
