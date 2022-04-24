import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './controllers/app.controller';
import { PrescriptController } from './controllers/prescript/prescript.controller';

@Module({
  imports: [],
  controllers: [AppController, PrescriptController],
  providers: [AppService],
})
export class AppModule {}
