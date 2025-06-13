import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }

  /* 自定義滾動條樣式 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.main};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.hover};
    }
  }

  /* 隱藏滾動條按鈕 */
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

//元件容器
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main};
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background.main};
  position: relative;
  margin-left: 345px; // 對應 Sidebar 的 min-width
  width: calc(100% - 345px); // 計算剩餘寬度
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; // 改善移動設備上的滾動體驗

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    position: absolute;
    margin-left: 0;
    width: 100%;
    top: 80px;
    height: calc(100vh - 80px); // 減去頂部導航的高度
    padding-bottom: 20px; // 添加底部間距
  }
`;

export { GlobalStyle };
