import * as nest from '@nestjs/common';
import createPrescript from 'src/utils/createPrescript';

@nest.Controller('prescript')
export class PrescriptController {
  @nest.Get()
  public async getPrescript() {
    return createPrescript();
  }
}
