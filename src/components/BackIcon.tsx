import { css } from '@emotion/react';

export function BackIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" css={icon}>
      <path
        d="m20.8 20.7c-.3 0-.6-.1-.8-.4l-7.5-7.5c-.5-.5-.5-1.2 0-1.7l7.5-7.5c.5-.5 1.2-.5 1.7 0s.5 1.2 0 1.7l-6.8 6.7 6.7 6.7c.5.5.5 1.2 0 1.7-.2.2-.5.3-.8.3z"
        fill="currentColor"
      />
    </svg>
  );
}

const icon = css`
  color: rgb(25, 31, 40);
  width: 24px;
  height: 24px;
`;