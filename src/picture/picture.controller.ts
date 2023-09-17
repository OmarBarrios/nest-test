import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PictureService } from './picture.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pictures')
@Controller('pictures')
export class PictureController {
  constructor(private pictureService: PictureService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile(new ValidationPipe()) file: Express.Multer.File) {
    return this.pictureService.create(file);
  }

  @Get('')
  async findAll() {
    return this.pictureService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.pictureService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.pictureService.delete(id);
  }
}
