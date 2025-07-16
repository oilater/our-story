export type Step = 'First' | 'Second' | 'Third';
export type Gender = 'male' | 'female' | 'other';
export type Social = 'kakao' | 'naver' | 'google' | 'none';

export interface UserInfo {
    id: string;
    password: string;
    email: string;
    phone: string;
    name: string;
    birth: string;
    gender: Gender;
    social: Social;
  }