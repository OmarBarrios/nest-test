import { IsNotEmpty } from 'class-validator';

export class CreatePictureDto {
  @IsNotEmpty()
  originalname: string;

  @IsNotEmpty()
  buffer: Buffer;

  @IsNotEmpty()
  fieldname: string;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  verifyData: string;
}
