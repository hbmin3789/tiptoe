import * as hangul from 'hangul-js';

// 마지막 글자를 분해하여 리턴함
const disassembleLastChar = (str: string) => {
  const stringArr = hangul.disassemble(str, true);
  return stringArr[stringArr.length - 1];
};

// 목적격 조사 - 받침이 있으면 '을', 없으면 '를'
export const getObjectInvestigation = (str: string) => {
  const lastCharLength = disassembleLastChar(str).length;
  return str + (lastCharLength === 3 ? '을' : '를');
};

// 주격 조사 - 이름만 쓸 때는 '가' 이름 뒤에 접속사가 붙으면 '이'
// '박소이', '김서이'와 같이 '이'가 마지막으로 온다면 '가' 리턴
// ex) 박소이'가' / 박정숙'이'
export const getNominativeInvestigation = (str: string) => {
  const lastChar = disassembleLastChar(str);
  const temp = ['ㅇ', 'ㅣ'];
  let isFirst = true;
  lastChar.forEach((x, idx) => (isFirst = x === temp[idx]));
  return str + (isFirst ? '가' : '이');
};
