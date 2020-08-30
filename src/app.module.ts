import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortnerModule } from './shortner/shortner.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlShortnerSchema } from './shortner/shortner.model';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://usama:usama@cluster0-e22ge.mongodb.net/BlogPost?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: 'urlShortner', schema: UrlShortnerSchema },
    ]),
    ShortnerModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
