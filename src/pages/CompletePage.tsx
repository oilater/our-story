import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useAtom } from "jotai";
import { userInfoAtom } from "../atoms/user-info-atom";
import { css } from "@emotion/react";
import { InfoRow } from "../components/InfoRow";

export function CompletePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [userInfo] = useAtom(userInfoAtom);

  useGSAP(() => {
    gsap.from(['.title-section', '.info-card'], {
      opacity: 0,
      duration: 0.8,
      y: -5,
      ease: 'power2.inOut',
      stagger: 0.2,
    });
  }, {scope: containerRef});

  const socialText =
  userInfo.social === "none"
    ? "연동 안함"
    : userInfo.social === "kakao"
    ? "카카오"
    : userInfo.social === "naver"
    ? "네이버"
    : userInfo.social === "google"
    ? "구글"
    : userInfo.social;

    const genderText =
    userInfo.gender === "male"
      ? "남성"
      : userInfo.gender === "female"
      ? "여성"
      : "그 외";

  return (
    <div ref={containerRef} css={container}>
      <div className="title-section">
        <p css={subTitle}>{userInfo.name}님 환영해요!</p>
        <h1 css={title}>회원가입이 완료되었습니다</h1>
      </div>
      <div className="info-card" css={infoCard}>
        <InfoRow label="아이디" value={userInfo.id} />
        <InfoRow label="이메일" value={userInfo.email} />
        <InfoRow label="전화번호" value={userInfo.phone} />
        <InfoRow label="이름" value={userInfo.name} />
        <InfoRow label="생년월일" value={userInfo.birth} />
        <InfoRow label="성별" value={genderText} />
        <InfoRow label="소셜 연동" value={socialText} />
      </div>
    </div>
  );
}

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

const infoCard = css`
  width: 100%;
  margin-top: 4rem;
  background: #fff;
  border-radius: 16px;
  text-align: left;
`;

const container = css`
  margin-top: 40px;
`;