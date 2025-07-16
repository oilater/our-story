import { css } from '@emotion/react';

type BottomCTAProps = {
    children: React.ReactNode;
    onNext: () => void;
}

export function BottomCTA({children, onNext}: BottomCTAProps) {
  return (
    <button
      type="button"
      css={bottomCTA}
      onClick={onNext}
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
  bottom: 40px;
  max-width: 650px;
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
`;