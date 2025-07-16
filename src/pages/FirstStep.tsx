import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { Input } from '../components/Input';
import { ValidationRules } from '../utils/validate-rules';
import { userInfoAtom } from '../atoms/user-info-atom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(['.title-section', '.form'], {
      opacity: 0,
      duration: 0.8,
      y: -5,
      ease: 'power2.inOut',
      stagger: 0.2,
    });
  }, {scope: containerRef})
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FirstStepFormData>({
    defaultValues: {
      id: userInfo.id,
      password: userInfo.password,
      email: userInfo.email,
      phone: userInfo.phone
    },
    mode: 'onChange'
  });

  const handleFormSubmit = (data: FirstStepFormData) => {
    setUserInfo(prev => ({ ...prev, ...data }));

    const exitTween = gsap.to(containerRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: 'power2.in',
    });
    exitTween.eventCallback('onComplete', onSubmit);
  };

  return (
    <div ref={containerRef} css={container}>
      <div className="title-section">
        <p css={subTitle}>Step 1</p>
        <h1 css={title}>회원 정보를 입력해주세요</h1>
      </div>
      
      <form id="first-step-form" className="form" css={form} onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          type="text"
          label="아이디"
          placeholder="아이디를 입력해주세요"
          error={errors.id?.message}
          autoFocus
          {...register('id', ValidationRules.Id)}
        />

        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
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