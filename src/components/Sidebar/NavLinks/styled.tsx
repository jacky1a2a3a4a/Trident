import styled from 'styled-components';

//// 容器
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

// 連結
export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.hover};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.hover};
  }
`;
