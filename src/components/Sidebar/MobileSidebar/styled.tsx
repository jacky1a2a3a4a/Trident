import styled from 'styled-components';

export const TopNav = styled.header`
  background-color: ${({ theme }) => theme.colors.background.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
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

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  position: relative;
  width: 100%;
  max-width: 765px;
  margin: 0 2rem;
`;

export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.background.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 80px;
  left: 0;
  right: 0;
  width: 100%;
  max-height: ${({ $isOpen }) => ($isOpen ? 'auto' : '0')};
  z-index: 999;
  padding-bottom: ${({ $isOpen, theme }) => ($isOpen ? theme.spacing.xl : '0')};
  overflow-y: auto;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
