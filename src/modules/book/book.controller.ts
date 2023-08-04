import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { Book } from './book.schema';
import { BookService } from './book.service';
import { CreateUpdateBookDto } from 'src/core/models/book-action.model';

@Controller('')
export class BookController {
  /**
   * https://docs.nestjs.com/custom-decorators
   */
  constructor(private readonly bookService: BookService) {}

  @Post()
  async createBook(@Res() response, @Body() book: CreateUpdateBookDto) {
    const newBook = await this.bookService.create(book);
    return response.status(HttpStatus.CREATED).json({
      newBook,
    });
  }

  @Get()
  async fetchAll(@Res() response) {
    const books = await this.bookService.readAll();
    return response.status(HttpStatus.OK).json({
      books,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const book = await this.bookService.readById(id);
    return response.status(HttpStatus.OK).json({
      book,
    });
  }

  @Put('/:id')
  async update(
    @Res() response,
    @Param('id') id: string,
    @Body(new ValidationPipe()) book: CreateUpdateBookDto,
  ) {
    const updatedBook = await this.bookService.update(id, book);
    return response.status(HttpStatus.OK).json({
      updatedBook,
    });
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    const deletedBook = await this.bookService.delete(id);
    return response.status(HttpStatus.OK).json({
      deletedBook,
    });
  }
}
