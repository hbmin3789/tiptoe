import { Controller } from '@nestjs/common';
import * as nest from '@nestjs/common';

@Controller('word')
export class WordController {
  @nest.Get()
  public async getWords() {}
  @nest.Post()
  public async addWord() {}
}
