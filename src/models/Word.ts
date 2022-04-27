import CommonDao from './Common';
import * as orm from 'typeorm';
//#region Entity
@orm.Entity()
class Word {
  @orm.Column('int')
  public readonly id!: number;
  @orm.Column('text')
  public readonly content!: string;
}

export default Word;

//#endregion

export class WordDao extends CommonDao {}
