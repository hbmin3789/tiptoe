import * as hangul from 'hangul-js';

// 목적격 조사 - 받침이 있으면 '을', 없으면 '를'
export const getObjectInvestigation = (str: string) => {
  const stringArr = hangul.disassemble(str, true);
  const lastChar = stringArr[stringArr.length - 1];
  return str + (lastChar.length === 3 ? '을' : '를');
};
