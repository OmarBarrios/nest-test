import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PictureSchema } from './schemas/picture.schema';
import { PictureService } from './picture.service';
import { PictureController } from './picture.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Picture',
        schema: PictureSchema,
      },
    ]),
  ],
  controllers: [PictureController],
  providers: [PictureService],
})
export class PictureModule {}
