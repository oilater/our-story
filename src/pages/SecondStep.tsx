import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { userInfoAtom } from '../atoms/user-info-atom';
import { Input } from '../components/Input';
import { ValidationRules } from '../utils/validate-rules';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface SecondStepFormData {
  name: string;
  birth: string;
  gender: 'male' | 'female' | 'other';
}

interface SecondStepProps {
  onSubmit: () => void;
}

export function SecondStep({ onSubmit }: SecondStepProps) { 
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);
  const [selectedGender, setSelectedGender] = useState(userInfo.gender || 'male');
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SecondStepFormData>({
    defaultValues: {
      name: userInfo.name,
      birth: userInfo.birth,
      gender: userInfo.gender
    },
    mode: 'onChange'
  });

  useGSAP(() => {
    gsap.from(['.title-section', '.form'], {
      opacity: 0,
      duration: 0.8,
      y: -5,
      ease: 'power2.inOut',
      stagger: 0.2,
    });
  }, {scope: containerRef})

  const handleFormSubmit = (data: SecondStepFormData) => {
    setUserInfo(prev => ({ ...prev, ...data }));

    const exitTween = gsap.to(containerRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: 'power2.in',
    });
    exitTween.eventCallback('onComplete', onSubmit);
  };

  const handleGenderSelect = (e: React.MouseEvent<HTMLButtonElement>, gender: 'male' | 'female' | 'other') => {
    e.preventDefault();
    setSelectedGender(gender);
    setUserInfo(prev => ({ ...prev, gender }));
  };

  return (
    <div ref={containerRef} css={container}>
      <div className="title-section">
        <p css={subTitle}>Step 2</p>
        <h1 css={title}>개인 정보를 입력해주세요</h1>
      </div>
      
      <form id="second-step-form" className="form" css={form} onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          type="text"
          label="이름"
          placeholder="이름을 입력해주세요"
          error={errors.name?.message}
          autoFocus
          {...register('name', ValidationRules.Name)}
        />

        <Input
          type="date"
          label="생년월일"
          placeholder="생년월일을 선택해주세요"
          error={errors.birth?.message}
          {...register('birth', ValidationRules.Birth)}
        />

        <div css={genderContainer}>
          <label css={genderLabel}>성별</label>
          <div css={genderOptions}>
            <button
              type="button"
              css={[genderButton, selectedGender === 'male' && selectedGenderButton]}
              onClick={(e) => handleGenderSelect(e, 'male')}
            >
              남성
            </button>
            <button
              type="button"
              css={[genderButton, selectedGender === 'female' && selectedGenderButton]}
              onClick={(e) => handleGenderSelect(e, 'female')}
            >
              여성
            </button>
            <button
              type="button"
              css={[genderButton, selectedGender === 'other' && selectedGenderButton]}
              onClick={(e) => handleGenderSelect(e, 'other')}
            >
              그 외
            </button>
          </div>
          {errors.gender && <span css={errorText}>{errors.gender.message}</span>}
        </div>
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

const genderContainer = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const genderLabel = css`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const genderOptions = css`
  display: flex;
  gap: 12px;
`;

const genderButton = css`
  flex: 1;
  height: 48px;
  padding: 0 16px;
  border: 2px solid #E5E7EB;
  border-radius: 8px;
  background: white;
  color: #6B7280;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;

  &:hover {
    border-color: #8B5CF6;
    color: #8B5CF6;
  }
`;

const selectedGenderButton = css`
  border-color: #8B5CF6;
  color: #8B5CF6;

  &:hover {
    border-color: #7C3AED;
    color: #7C3AED;
  }
`;

const errorText = css`
  font-size: 12px;
  color: #ef4444;
  margin-top: -8px;
`;