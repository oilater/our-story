import { css } from '@emotion/react';
import { BackIcon } from './BackIcon';

type HeaderProps = {
  onBack: () => void;
};

export function Header({ onBack }: HeaderProps) {
  return (
    <header css={header}>
      <button type="button" css={backButton} onClick={onBack}>
        <BackIcon />
      </button>
    </header>
  );
}

const header = css`
  display: flex;
  height: 40px;
  align-items: center;
`;

const backButton = css`
  padding-left: 6px;
`;