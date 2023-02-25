import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/interfaces/cat.interface';
import { CreateCatDto } from './dtos/create-cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  //metodo crear un gato
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    return {
      Operation: 'Create',
      Item: createCatDto,
    };
  }

  // metodo para obtener los gatos
  @Get()
  getall(): Cat[] {
    const cats = this.catsService.getAll();
    return cats;
  }
}
