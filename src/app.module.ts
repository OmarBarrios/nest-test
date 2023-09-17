import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PictureModule } from './picture/picture.module';
// import { env } from './config/env';

// const connectionString = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_IP}/${DB_NAME}?${DB_ARGS}`
// hii
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/nestdb'),
    PictureModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
