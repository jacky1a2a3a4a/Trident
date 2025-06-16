import styled from 'styled-components';

//元件容器
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main};
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
`;

// 側邊欄容器
export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background.main};
  position: relative;
  z-index: 999;
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
