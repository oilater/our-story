export interface UserInfo {
    id: string;
    password: string;
    email: string;
    phone: string;
    birth: Date;
    gender: Gender;
}

type Gender = 'male' | 'female' | 'other';