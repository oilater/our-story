import { css } from "@emotion/react";

export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div css={infoRow}>
      <span css={labelStyle}>{label}</span>
      <span css={valueStyle}>{value}</span>
    </div>
  );
}

const infoRow = css`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 16px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 8px;
`;

const labelStyle = css`
  color: #888;
  font-weight: 400;
`;

const valueStyle = css`
  font-weight: 400;
  color: #000;
`;
