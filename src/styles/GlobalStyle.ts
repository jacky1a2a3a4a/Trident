import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 盒模型 */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  /* HTML & Body */
  html {
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
    max-width: 100%;
    font-family: 'Noto Sans TC', 'Poppins', 'Noto Sans', sans-serif;
    color: ${({ theme }) => theme.colors.text.main};
    transition: color 0.3s ease, background-color 0.3s ease;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  }

  /* 標題 */
  h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  /* 段落 */
  p {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  /* 連結 */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* 列表 */
  ol, ul, li {
    list-style: none;
  }

  /* 表格 */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* 圖片 */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* 表單元素 */
  input,
  button,
  textarea,
  select {
    color: inherit;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.2;
    margin: 0;
  }

  /* 按鈕 */
  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  /* 包含 SVG 的按鈕 */
  button:has(svg) {
    line-height: 0;
  }

  /* 聚焦樣式 */
  input:focus,
  textarea:focus,
  select:focus {
    appearance: none;
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    outline-offset: -1px;
  }

  button:focus {
    outline: none;
  }

  /* 禁用狀態 */
  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export default GlobalStyle;
