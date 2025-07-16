export const ValidationRules = {
    Id: {
      required: '아이디를 입력해주세요',
      minLength: { value: 4, message: '아이디는 4자 이상이어야 합니다' },
      pattern: { value: /^[a-zA-Z0-9_]+$/, message: '영문, 숫자, 언더스코어만 사용 가능합니다' }
    },
    Password: {
      required: '비밀번호를 입력해주세요',
      minLength: { value: 8, message: '비밀번호는 8자 이상이어야 합니다' },
      pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/, message: '영문과 숫자를 포함해야 합니다' }
    },
    Email: {
      required: '이메일을 입력해주세요',
      pattern: { 
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
        message: '올바른 이메일 형식을 입력해주세요' 
      }
    },
    Phone: {
      required: '전화번호를 입력해주세요',
      pattern: { value: /^[0-9-]+$/, message: '올바른 전화번호 형식을 입력해주세요' }
    }
  } as const;