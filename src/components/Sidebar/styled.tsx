import styled from 'styled-components';

//元件容器
export const SidebarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.background.light};

  position: fixed;
  min-width: 345px;
  height: 100vh;
  left: 0;
  top: 0;

  padding: 2rem 1.5rem;
  
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background.light};
    z-index: 1000;
    padding: 2rem 1.5rem;
    overflow-y: auto;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
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

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    justify-content: flex-start;
  }
`;

// 標題文字
export const LogoText = styled.h1`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  font-weight: bold;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;



//// 導覽列
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

// 導覽列連結
export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  transition: color 0.2s ease;
  border-bottom: 1px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.hover};
    border-bottom-color: ${({ theme }) => theme.colors.primary.hover};
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    font-size: 1.1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

    &:hover {
      color: ${({ theme }) => theme.colors.primary.hover};
      border-bottom-color: ${({ theme }) => theme.colors.primary.hover};
    }
  }
`;
