import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortnerModule } from './shortner/shortner.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ShortnerModule,
    MongooseModule.forRoot(
      'mongodb+srv://usama123:usama123@cluster0-hwdeu.mongodb.net/URLShortner?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
