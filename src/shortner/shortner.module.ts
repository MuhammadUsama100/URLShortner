import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ShortnerService } from './shortner.service';
import { UrlShortnerSchema } from './shortner.model';
import { from } from 'rxjs';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'urlShortner', schema: UrlShortnerSchema },
    ]),
  ],
  providers: [ShortnerService],
})
export class ShortnerModule {}
