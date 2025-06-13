import styled from 'styled-components';

//// 頂部導覽列
export const TopNav = styled.header`
  background-color: ${({ theme }) => theme.colors.background.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// 頂部導覽列容器
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 765px;
  margin: 0 2rem;
`;

//網頁版 側邊攔容器
export const SidebarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.background.white};

  position: fixed;
  min-width: 345px;
  height: 100vh;
  left: 0;
  top: 0;

  padding: 2rem 1.5rem;

  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    display: none;
  }
`;

//行動版 側邊欄容器
export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${({ theme }) => theme.colors.background.light};
    z-index: 999;
    padding: 2rem 1.5rem;
    overflow-y: auto;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary.main};
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    opacity: 0.7;
  }
`;

//// 標題容器
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    padding: 0;
    margin-bottom: 0;
  }
`;

// 標題文字
export const LogoText = styled.h1`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  font-weight: bold;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  }
`;

//// 導覽列
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    align-items: flex-start;
  }
`;

// 導覽列連結
export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  transition: color 0.2s ease;
  border-bottom: 1px solid transparent;
  padding: 1rem 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.hover};
    border-bottom-color: ${({ theme }) => theme.colors.primary.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
    width: 100%;
  }
`;

export const CircleLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: bold;
`;
