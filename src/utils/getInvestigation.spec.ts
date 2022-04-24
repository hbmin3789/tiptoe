import { getObjectInvestigation } from './getInvestigation';

describe('Get Investigation', () => {
  describe('root', () => {
    const test = ['테스트', '테스트를 실행하는 것'];
    it('should return "를"', () => expect(getObjectInvestigation(test[0])).toBe(test[0] + '를'));
    it('should return "을"', () => expect(getObjectInvestigation(test[1])).toBe(test[1] + '을'));
  });
});
