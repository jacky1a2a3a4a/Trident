import styled from 'styled-components';

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.main};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    display: none;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const HamburgerIcon = styled.div<{ $isOpen: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    background-color: ${({ theme }) => theme.colors.primary.main};
    display: block;
    height: 2px;
    width: 100%;
    border-radius: 1px;
    transition: all 0.3s ease;
    position: absolute;

    &:first-child {
      transform: ${({ $isOpen }) =>
        $isOpen ? 'rotate(45deg)' : 'translateY(-8px)'};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
      transform: none;
    }

    &:last-child {
      transform: ${({ $isOpen }) =>
        $isOpen ? 'rotate(-45deg)' : 'translateY(8px)'};
    }
  }
`;
