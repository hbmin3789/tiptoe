import * as orm from 'typeorm';

@orm.Entity()
class Word {
  @orm.Column('int')
  public readonly id!: number;
  @orm.Column('text')
  public readonly content!: string;
}
