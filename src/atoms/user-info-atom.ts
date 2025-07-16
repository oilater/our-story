import { atom } from "jotai";
import { type UserInfo } from "../types";

export const userInfoAtom = atom<UserInfo>({
  // Step 1
  id: '',
  password: '',
  email: '',
  phone: '',

  // Step 2
  birth: new Date(),
  gender: 'male',
});