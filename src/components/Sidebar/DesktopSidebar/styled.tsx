import styled from 'styled-components';

//// 外層容器
export const SidebarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.background.white};
  position: fixed;
  min-width: 345px;
  height: 100vh;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    display: none;
  }
`;

// 文字容器
export const Logo = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

// 文字
export const LogoText = styled.h1`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`;

