import styled from 'styled-components';

//元件容器
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main};
  width: 100%;
  height: 100vh;
`;

export const Main = styled.main`
  margin-left: 345px; // 對應 Sidebar 的 min-width
  width: calc(100% - 345px); // 計算剩餘寬度
  height: 100vh;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    margin-left: 0;
    width: 100%;
  }
`;
