import { css } from '@emotion/react';

type BottomCTAProps = {
    children: React.ReactNode;
    formId?: string;
    onComplete?: () => void;
    type?: "submit" | "button";
};

export function BottomCTA({children, formId, onComplete, type = "submit"}: BottomCTAProps) {
  return (
    <button
      type={type}
      css={bottomCTA}
      form={formId}
      onClick={onComplete}
    >
      {children}
    </button>
  );
}

const bottomCTA = css`
  position: absolute;
  margin: 0 auto;
  left: 20px;
  right: 20px;
  bottom: 60px;
  max-width: 550px;
  width: calc(100% - 40px);
  height: 56px;
  transform: translateZ(0);
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 17px;
  font-weight: 600;
  color: white;

  border-radius: 16px;
  background-color: #8B5CF6;
  border: none;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: #7C3AED;
  }
`;