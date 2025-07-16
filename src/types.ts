type Gender = 'male' | 'female' | 'other';

export interface UserInfo {
    id: string;
    password: string;
    email: string;
    phone: string;
    birth: Date;
    gender: Gender;
}

export type Step = 'First' | 'Second' | 'Third';
