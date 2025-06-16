import styled from 'styled-components';

//// 外層容器
export const TopNav = styled.header`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    background-color: ${({ theme }) => theme.colors.background.white};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    z-index: 1000;

    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`;

// 頂部導航
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  position: relative;
  width: 100%;
  max-width: 765px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0;
  margin-bottom: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const LogoText = styled.h1`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
`;


// 下拉選單
export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.background.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  width: 100%;
  max-height: ${({ $isOpen }) => ($isOpen ? 'auto' : '0')};
  z-index: 999;
  padding-bottom: ${({ $isOpen, theme }) => ($isOpen ? theme.spacing.xl : '0')};
  overflow-y: auto;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
