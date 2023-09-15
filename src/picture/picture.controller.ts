import { Controller, Post, Body } from '@nestjs/common';
import { PictureService } from './picture.service';

@Controller('picture')
export class PictureController {
  constructor(private pictureService: PictureService) {}

  @Post()
  async create(@Body() createPicture: any) {
    return this.pictureService.create(createPicture);
  }
}
