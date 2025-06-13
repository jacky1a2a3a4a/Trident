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

export const HamburgerIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: currentColor;
    border-radius: 1px;
    transition: transform 0.3s ease;
  }
`;
