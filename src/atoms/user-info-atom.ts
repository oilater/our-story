import { atom } from "jotai";
import type { UserInfo } from "../types";

const initialUserInfo: UserInfo = {
  id: '',
  password: '',
  email: '',
  phone: '',
  name: '',
  birth: '',
  gender: 'other',
  social: 'none',
};

export const userInfoAtom = atom<UserInfo>(initialUserInfo);

export const resetUserInfoAtom = atom(null, (_, set) => {
  set(userInfoAtom, initialUserInfo);
});