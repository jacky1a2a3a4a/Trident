import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  .desktop-sidebar {
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
      display: none;
    }
  }

  .mobile-sidebar {
    display: none;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
