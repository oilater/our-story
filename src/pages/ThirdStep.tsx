import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useAtom } from 'jotai';
import { userInfoAtom } from '../atoms/user-info-atom';
import type { Social } from '../types';

export function ThirdStep() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);
  const [selectedSocial, setSelectedSocial] = useState<Social>(userInfo.social);
  
  const socialColorMap: Record<Social, ReturnType<typeof css>> = {
    kakao: kakaoButton,
    naver: naverButton,
    google: googleButton,
    none: css``,
  };


  useGSAP(() => {
    gsap.from([containerRef.current, '.title-section', '.social-button-group'], {
      opacity: 0,
      duration: 0.8,
      y: -5,
      ease: 'power2.inOut',
      stagger: 0.2,
    });
  }, {scope: containerRef});

  const onSelectSocial = (social: Social) => {
    setSelectedSocial(social);
    setUserInfo(prev => ({ ...prev, social }));
  };

  const getSocialButtonCss = (selected: Social, current: Social) => {
    return [
      socialButton,
      socialColorMap[current],
      selected !== 'none' && selected !== current ? disabledButton : undefined,
    ];
  };

  return (
    <div ref={containerRef} css={container}>
      <div className="title-section">
        <p css={subTitle}>Step 3</p>
        <h1 css={title}>소셜 계정 연동하기</h1>
      </div>
      <div className="social-button-group" css={socialButtonGroup}>
        <button 
          type="button" 
          css={getSocialButtonCss(selectedSocial, 'kakao')}
          onClick={() => onSelectSocial('kakao')}
        >
          카카오 연동하기
        </button>
        <button 
          type="button" 
          css={getSocialButtonCss(selectedSocial, 'naver')}
          onClick={() => onSelectSocial('naver')}
        >
          네이버 연동하기
        </button>
        <button 
          type="button" 
          css={getSocialButtonCss(selectedSocial, 'google')}
          onClick={() => onSelectSocial('google')}
        >
          구글 연동하기
        </button>
      </div>
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

const socialButtonGroup = css`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  gap: 20px;
  width: 100%;
`;

const kakaoButton = css`
  color: #3C1E1E;
  border-color: #FEE500;
  background: #FEE500;
`;

const naverButton = css`
  color: #fff;
  border-color: #03C75A;
  background: #03C75A;
`;

const googleButton = css`
  color: #222;
  border-color: #ddd;
  background: #E6E6E6;
`;

const socialButton = css`
  height: 50px;
  border-radius: 8px;
  background: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }
`;

const disabledButton = css`
  background: #f5f5f5;
  color: #999;
  border-color: #ddd;
  
  &:hover {
    opacity: 1;
  }
`;