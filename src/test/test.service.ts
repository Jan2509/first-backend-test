import { Injectable } from '@nestjs/common';
import { Cat } from './cat/cat.interface';

@Injectable()
export class TestService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
