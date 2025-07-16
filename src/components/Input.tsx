import { css } from '@emotion/react';
import { type InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  validation?: {
    required?: string;
    minLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
  };
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, validation, ...props }, ref) => {
    return (
      <div css={inputGroup}>
        <label css={labelStyle}>{label}</label>
        <input
          ref={ref}
          css={[input, error && errorInput]}
          autoComplete="on"
          {...props}
        />
        {error && (
          <span css={errorText}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

const inputGroup = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const labelStyle = css`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const input = css`
  height: 48px;
  padding: 0 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #8B5CF6;
  }

  &::placeholder {
    color: #999;
  }
`;

const errorInput = css`
  border-color: #ef4444;
`;

const errorText = css`
  font-size: 12px;
  color: #ef4444;
  margin-top: -8px;
`;