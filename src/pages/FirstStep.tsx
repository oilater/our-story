// src/pages/FirstStep.tsx
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { firstStepFormDataAtom } from '../atoms/user-info-atom';
import { Input } from '../components/Input';
import { ValidationRules } from '../utils/validate-rules';

interface FirstStepFormData {
  id: string;
  password: string;
  email: string;
  phone: string;
}

interface FirstStepProps {
  onSubmit: () => void;
}

export function FirstStep({ onSubmit }: FirstStepProps) {
  const [firstStepFormData, setFirstStepFormData] = useAtom(firstStepFormDataAtom);
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FirstStepFormData>({
    defaultValues: firstStepFormData,
    mode: 'onChange'
  });

  const handleFormSubmit = (data: FirstStepFormData) => {
    setFirstStepFormData(data);
    onSubmit();
  };

  return (
    <div css={container}>
      <p css={subTitle}>Step 1</p>
      <h1 css={title}>회원 정보 입력</h1>
      
      <form id="first-step-form" css={form} onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          type="text"
          label="아이디"
          placeholder="아이디를 입력하세요"
          error={errors.id?.message}
          autoFocus
          {...register('id', ValidationRules.Id)}
        />

        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          error={errors.password?.message}
          {...register('password', ValidationRules.Password)}
        />

        <Input
          type="email"
          label="이메일"
          placeholder="ourstory@naver.com"
          error={errors.email?.message}
          {...register('email', ValidationRules.Email)}
        />

        <Input
          type="tel"
          label="전화번호"
          placeholder="01012345678"
          error={errors.phone?.message}
          {...register('phone', ValidationRules.Phone)}
        />
      </form>
    </div>
  );
}

const container = css`
  margin-top: 40px;
`;

const subTitle = css`
  font-size: 16px;
  font-weight: 500;
  color: gray;
  margin-bottom: 4px;
`;

const title = css`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

const form = css`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;