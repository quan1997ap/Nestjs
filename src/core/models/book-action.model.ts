import { Min, Max, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUpdateBookDto {
  @IsNotEmpty()
  name: string;

  author: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Min(0)
  @Max(10)
  publishYear: number;
}
