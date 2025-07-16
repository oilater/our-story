import { atom } from "jotai";
import type { UserInfo } from "../types";

export const userInfoAtom = atom<UserInfo>({
  id: '',
  password: '',
  email: '',
  phone: '',
  name: '',
  birth: '',
  gender: 'other',
  social: 'none',
});