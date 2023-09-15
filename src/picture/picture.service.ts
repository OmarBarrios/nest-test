import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Picture } from './schemas/picture.schema';

@Injectable()
export class PictureService {
  constructor(@InjectModel('Picture') private pictureModel: Model<Picture>) {}

  async create(picture: any) {
    const createdPicture = new this.pictureModel(picture);
    return createdPicture.save();
  }
}
