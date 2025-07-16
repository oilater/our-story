import { atom } from "jotai";

// Step 1 데이터
export const firstStepFormDataAtom = atom({
  id: '',
  password: '',
  email: '',
  phone: '',
});

// Step 2 데이터
export const secondStepFormDataAtom = atom({
  birth: new Date(),
  gender: 'other',
});

// Step 3 데이터
export const thirdStepFormDataAtom = atom({
  // Step 3에 필요한 데이터 추가
});