import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import fetch from 'node-fetch';
import * as FormData from 'form-data';

import { Picture } from './schemas/picture.schema';
import { env } from '../config/env';
import { CreatePictureDto } from './dtos/create.picture.dto';

const { VERIFY_URL, CLIENT_ID, AUTHORIZATION } = env;

@Injectable()
export class PictureService {
  constructor(@InjectModel('Picture') private pictureModel: Model<Picture>) {}

  async create(picture: any) {
    // const veryfiResponse = await this.uploadPictureInVerify(picture);
    picture.date = new Date();
    picture.verifyData = picture.originalname;
    const createdPicture = new this.pictureModel(picture);
    const savedPicture = await createdPicture.save();
    const { _id, verifyData, date } = savedPicture;

    return {
      ID: _id,
      date,
      verifyData,
    };
  }

  async uploadPictureInVerify(picture: CreatePictureDto) {
    const formData = new FormData();
    formData.append(picture.fieldname, picture.buffer);

    const veryfiResponse = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'CLIENT-ID': CLIENT_ID,
        // eslint-disable-next-line prettier/prettier
        'Authorization': AUTHORIZATION,
      },
      body: formData,
    });

    return veryfiResponse;
  }

  async findAll() {
    return this.pictureModel.find().exec();
  }

  async findOne(id: string) {
    return this.pictureModel.findById(id).exec();
  }

  async delete(id: string) {
    return this.pictureModel.findByIdAndDelete(id).exec();
  }
}
