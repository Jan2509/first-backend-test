import { Controller, Get, Req, Post, HttpCode, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { TestService } from './test.service';
import { Cat } from '../interface/cat.interface';
import { Request } from 'express';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.testService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.testService.findAll();
  }

  @Get('get')
  findAlltest(@Req() request: Request): string {
    return 'This is a test';
  }
  @Get(':id')
    findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post('post')
  @HttpCode(202)
  createold(@Req() request: Request): string {
    return 'This is a test';
  }
}
